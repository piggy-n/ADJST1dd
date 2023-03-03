import { action } from '@/store/Player/action';
import { initialState } from '@/store/Player/state';
import type { PlayerStoreState } from '@/store/Player/state';
import type { PlayerStoreAction } from '@/store/Player/action';

export { action, initialState };
export type PlayerStore = PlayerStoreState & PlayerStoreAction;
