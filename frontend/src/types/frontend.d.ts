import {
  RESOURCE_NAME,
  TOGGLEABLE_OBJECT,
  VIEWABLE_AREA,
} from '../utils/constants';

type ResourceKey = ValueOf<typeof RESOURCE_NAME>;
type ViewableArea = ValueOf<typeof VIEWABLE_AREA>;
type ToggleableObject = ValueOf<typeof TOGGLEABLE_OBJECT>;

export as namespace FrontEnd;
