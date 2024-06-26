<script setup lang="ts">
import type {
  CardType,
  CreateCardDto,
} from '@/components/project-management/cards/types';
import { type List } from '@/components/project-management/lists/types';
import { useCardsService } from '@/composables/services/useCardsService';
import { useProjectUsersService } from '@/composables/services/useProjectUsersService';
import { useAuthStore } from '@/stores/auth';
import { useSnackbarStore } from '@/stores/snackbar';
import type { VForm } from 'vuetify/lib/components/index.mjs';
import BaseEditorInput from '../base/BaseEditor/BaseEditorInput.vue';
import { useDialogStore } from '@/stores/dialog';
import { DIALOGS } from './types';
import { useWorkspaceStore } from '@/stores/workspace';
import BaseListSelector from '../inputs/BaseListSelector.vue';
import { cloneDeep } from 'lodash';
import { useStateStore } from '@/stores/state';

const authStore = useAuthStore();
const dialog = useDialogStore();
const { selectedWorkspace } = storeToRefs(useWorkspaceStore());
const { showSnackbar } = useSnackbarStore();
const { currentList } = storeToRefs(useStateStore());

const createForm = ref<VForm>();
const isCreatingMore = ref(false);

const cardsService = useCardsService();
const projectUsersService = useProjectUsersService();

const { data: users } = projectUsersService.useProjectUsersQuery({
  projectId: authStore.project!.id,
  select: (data) => data.map((pu) => pu.user),
});

const currentDialogIndex = computed(() =>
  dialog.getDialogIndex(DIALOGS.CREATE_CARD)
);
const currentDialog = computed(() => dialog.dialogs[currentDialogIndex.value]);

const list = computed(() => {
  if (currentDialog.value?.data?.list) {
    return currentDialog.value.data.list;
  } else {
    return currentList.value;
  }
});

const cardType = computed<CardType>(() => {
  if (currentDialog.value?.data && currentDialog.value.data?.type) {
    return currentDialog.value.data.type;
  } else if (list.value) {
    return list.value?.defaultCardType;
  } else {
    return selectedWorkspace.value?.defaultCardType;
  }
});

const createCardMutation = cardsService.useCreateCardMutation();
const createCardDto = ref<CreateCardDto>({
  title: '',
  listId: currentDialog.value?.data?.listId ?? list.value?.id,
  listStage: currentDialog.value?.data?.listStage ?? list.value?.listStages[0],
  users: currentDialog.value?.data?.users,
  type: cardType.value?.id,
});

const selectedList = ref<List>(cloneDeep(list.value));
watch(selectedList, (v) => {
  if (v) {
    createCardDto.value.listStage = v.listStages[0];
    createCardDto.value.listId = v.id;
  }
});

function closeDialog() {
  dialog.closeDialog(currentDialogIndex.value);
}

async function createCard() {
  if (
    createCardDto.value.title &&
    createCardDto.value.title.trim() !== '' &&
    createCardDto.value.listStage &&
    createCardDto.value.listId
  ) {
    createCardDto.value.listStageId = createCardDto.value.listStage.id;
    createCardMutation
      .mutateAsync(createCardDto.value)
      .then(() => {
        handlePostCreate();
      })
      .catch(() => {
        showSnackbar({
          message: 'Something went wrong, please try again.',
          color: 'error',
          timeout: 5000,
        });
      });
  }
}

/**
 * Reset title and description fields.
 * If create more is on, don't close the dialog.
 */
function handlePostCreate() {
  createCardDto.value.title = '';
  createCardDto.value.description = undefined;

  showSnackbar({
    message: `${cardType.value?.name} created`,
    color: 'success',
    timeout: 2000,
  });

  if (!isCreatingMore.value) {
    closeDialog();
  }
}
</script>

<template>
  <v-card
    color="surface"
    elevation="24"
    :loading="createCardMutation.isPending.value"
  >
    <div class="d-flex align-center ps-0 pa-4">
      <v-card-subtitle>
        <base-list-selector v-model="selectedList" />
        <v-icon icon="mdi-arrow-right-thin" class="ms-1" />
        Create {{ cardType.name }}
      </v-card-subtitle>
      <v-spacer />
      <base-icon-btn icon="mdi-close" color="default" @click="closeDialog()" />
    </div>
    <v-form ref="createForm" @submit.prevent="createCard">
      <div class="pa-4 pt-0">
        <base-editor-input
          v-model="createCardDto.title"
          :placeholder="cardType.name + ' name'"
          autofocus
          :heading="3"
          single-line
          class="mb-3"
          editable
          disable-commands
        />
        <base-editor-input
          v-model:json="createCardDto.description"
          placeholder="Enter description.."
          editable
        />
      </div>
      <v-card-actions class="d-flex justify-start align-center py-0 px-4">
        <div class="d-flex ga-2 align-center">
          <list-stage-selector
            v-model="createCardDto.listStage"
            :listStages="list?.listStages ?? []"
          />
          <base-user-selector
            v-model="createCardDto.users"
            :users="users ?? []"
            activator-hover-text="Assignee"
          />
          <base-date-picker
            v-model="createCardDto.startsAt"
            icon="mdi-calendar"
            class="text-caption"
            label="Start Date"
          />
          <base-date-picker
            v-model="createCardDto.dueAt"
            icon="mdi-calendar"
            class="text-caption"
            label="Due date"
          />
        </div>
        <v-spacer />
        <v-switch v-model="isCreatingMore" hide-details inset>
          <template #label>
            <span class="text-caption">Create more</span>
          </template>
        </v-switch>

        <v-btn
          density="comfortable"
          variant="flat"
          class="text-caption px-4 ms-4"
          type="submit"
          :loading="createCardMutation.isPending.value"
          >Create {{ cardType.name }}</v-btn
        >
      </v-card-actions>
    </v-form>
  </v-card>
</template>
