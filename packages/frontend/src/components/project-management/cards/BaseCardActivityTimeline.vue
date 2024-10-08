<script setup lang="ts">
import BaseEditorInput from '@/components/common/base/BaseEditor/BaseEditorInput.vue';
import { DIALOGS } from '@/components/common/dialogs/types';
import { useCardActivitiesService } from '@/services/useCardActivitiesService';
import { useUsersService } from '@/services/useUsersService';
import { useAuthStore } from '@/stores/auth';
import { useSnackbarStore } from '@/stores/snackbar';
import { ActivityType, type CardActivity } from './types';
import { useDialogStore } from '@/stores/dialog';
import BaseCardCommentBox from './BaseCardCommentBox.vue';
import type { Content } from '@tiptap/vue-3';
import { dayjs } from '@tillywork/shared';

const props = defineProps<{
  cardId: number;
}>();

const emit = defineEmits(['comment']);

const { useFindAllQuery, useDeleteActivityMutation } =
  useCardActivitiesService();
const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
const dialog = useDialogStore();
const snackbar = useSnackbarStore();

const comment = ref<Content>();
const isCommentEmpty = ref<boolean>();

const confirmDialogIndex = computed(() =>
  dialog.getDialogIndex(DIALOGS.CONFIRM)
);

const cardId = computed(() => props.cardId);

const { data: activities, refetch } = useFindAllQuery({
  cardId,
  sortBy: {
    key: 'createdAt',
    order: 'desc',
  },
});
const { mutateAsync: deleteActivity, isPending: isDeleting } =
  useDeleteActivityMutation();

const { getUserFullName } = useUsersService();

function openConfirmDeleteDialog(comment: CardActivity) {
  dialog.openDialog({
    dialog: DIALOGS.CONFIRM,
    data: {
      title: 'Confirm',
      message: 'Are you sure you want to delete this comment?',
      onCancel: () => dialog.closeDialog(confirmDialogIndex.value),
      onConfirm: () => deleteComment(comment),
      isLoading: isDeleting.value,
    },
  });
}

function deleteComment(comment: CardActivity) {
  deleteActivity({
    cardId: props.cardId,
    activityId: comment.id,
  })
    .catch(() => {
      snackbar.showSnackbar({
        message: 'Something went wrong, please try again.',
        color: 'error',
        timeout: 5000,
      });
    })
    .finally(() => {
      dialog.closeDialog(confirmDialogIndex.value);
    });
}

function createComment() {
  if (!isCommentEmpty.value) {
    emit('comment', comment.value);
    comment.value = undefined;
  }
}

watch(cardId, () => {
  refetch();
});
</script>

<template>
  <template v-if="user">
    <base-card-comment-box
      v-model="comment"
      v-model:empty="isCommentEmpty"
      placeholder="Write comment.. (/ for commands)"
      @submit="createComment"
      class="my-4"
    />
  </template>
  <v-timeline
    side="end"
    density="compact"
    size="x-small"
    truncate-line="both"
    class="card-activities pa-3 pt-6 ps-1"
    align="start"
  >
    <template v-for="activity in activities" :key="activity.id">
      <template v-if="activity.type === ActivityType.UPDATE">
        <v-timeline-item class="text-caption">
          <template #icon>
            <base-avatar
              :text="getUserFullName(activity.createdBy)"
              :photo="activity.createdBy.photo"
              class="text-xs"
            />
          </template>
          <span>
            {{
              user?.id === activity.createdBy.id
                ? 'You'
                : activity.createdBy.firstName
            }}
            <span class="text-grey">
              {{ activity.content.text }}
              {{ dayjs(activity.createdAt).fromNow() }}
            </span>
          </span>
        </v-timeline-item>
      </template>
      <template v-else>
        <v-timeline-item class="text-caption" size="small">
          <template #icon>
            <base-avatar
              :text="getUserFullName(activity.createdBy)"
              :photo="activity.createdBy.photo"
              class="text-xs"
              size="small"
            />
          </template>
          <v-card border="thin" class="w-100">
            <v-card-text
              class="py-1 px-3 border-b-thin bg-accent text-caption d-flex align-center"
            >
              <span>
                {{
                  user?.id === activity.createdBy.id
                    ? 'You'
                    : getUserFullName(activity.createdBy)
                }}
              </span>
              <span class="text-surface-variant">
                &nbsp;commented
                {{ dayjs(activity.createdAt).fromNow() }}
              </span>
              <v-spacer />
              <v-menu>
                <template #activator="{ props }">
                  <base-icon-btn
                    v-bind="props"
                    icon="mdi-dots-vertical"
                    size="x-small"
                  />
                </template>
                <v-card class="border-thin">
                  <v-list>
                    <v-list-item
                      class="text-error"
                      @click="openConfirmDeleteDialog(activity)"
                    >
                      <template #prepend>
                        <v-icon icon="mdi-delete" />
                      </template>
                      <v-list-item-title>Delete</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-menu>
            </v-card-text>
            <v-card-text>
              <base-editor-input v-model:json="activity.content" />
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </template>
    </template>
  </v-timeline>
</template>
