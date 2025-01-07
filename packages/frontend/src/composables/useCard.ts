import { useCardsService } from '@/services/useCardsService';
import { useSnackbarStore } from '@/stores/snackbar';
import { FieldTypes, type Card, type Field } from '@tillywork/shared';
import { cloneDeep } from 'lodash';

export const useCard = () => {
  const { showSnackbar } = useSnackbarStore();
  const { useUpdateCardMutation } = useCardsService();
  const { mutateAsync: updateCard } = useUpdateCardMutation();

  function updateFieldValue({
    card,
    field,
    v,
  }: {
    card: Card;
    field: Field;
    v: any;
  }) {
    const cardCopy = ref(cloneDeep(card));
    cardCopy.value.data[field.slug] = normalizeFieldValue({ v, field });

    updateCard(cardCopy.value).catch(() => {
      showSnackbar({
        message: 'Something went wrong, please try again.',
        color: 'error',
      });
    });
  }

  function normalizeFieldValue({ v, field }: { v: any; field: Field }) {
    let newValue: any;
    switch (field.type) {
      case FieldTypes.DROPDOWN:
      case FieldTypes.LABEL:
      case FieldTypes.USER:
      case FieldTypes.CARD:
        newValue = Array.isArray(v)
          ? v.map((item) => (item.item ? item.item : item.toString()))
          : v
          ? [v.item ? v.item : v.toString()]
          : undefined;
        break;
      case FieldTypes.CHECKBOX:
      case FieldTypes.NUMBER:
        newValue = v;
        break;
      default:
        newValue = Array.isArray(v)
          ? v.map((item) => (item.item ? item.item : item.toString()))
          : v
          ? v.toString()
          : undefined;
    }

    newValue = Array.isArray(newValue)
      ? newValue.length && !!newValue[0]
        ? newValue
        : undefined
      : newValue;

    return newValue;
  }

  return {
    updateFieldValue,
    normalizeFieldValue,
  };
};
