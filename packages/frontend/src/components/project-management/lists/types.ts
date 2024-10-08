import type { PaginationParams } from '../views/types';
import type { View } from '../views/types';
import type { QueryFilter } from '../filters/types';
import type { CardType } from '../cards/types';
import type { Field } from '../../common/fields/types';
import { ListGroupOptions } from '@tillywork/shared';

export interface List {
  id: number;
  icon: string;
  iconColor: string;
  name: string;
  spaceId: number;
  listStages: ListStage[];
  views: View[];
  defaultCardType: CardType;
}

export interface ListStage {
  id: number;
  listId: number;
  name: string;
  color: string;
  order: number;
  isCompleted?: boolean;
}

export interface ListGroup {
  id: number;
  name: string;
  list: List;
  type: ListGroupOptions;
  entityId?: number;
  color?: string;
  icon?: string;
  filter?: QueryFilter;
  options?: PaginationParams;
  isExpanded?: boolean;
  field?: Field;
}

export const DEFAULT_LIST_GROUP_BY_OPTIONS: {
  label: string;
  value: ListGroupOptions;
  icon: string;
  field?: Field;
}[] = [
  {
    label: 'Stage',
    value: ListGroupOptions.LIST_STAGE,
    icon: 'mdi-circle-slice-8',
  },
  {
    label: 'Assignee',
    value: ListGroupOptions.ASSIGNEE,
    icon: 'mdi-account',
  },
];
