import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorageByKey, setLocalStorageByKey } from '../../utils/common';
import { THEME_MODE } from '../../common/constants';

const initialState = {
  mode: getLocalStorageByKey('mode') || THEME_MODE.lIGHT,
  userId: '643ecd390ef27e394b807655',
  isToggleSidebar: true,
  isLoading: false,
};

export const common = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setMode(state) {
      state.mode =
        state.mode === THEME_MODE.lIGHT ? THEME_MODE.DARK : THEME_MODE.lIGHT;
      setLocalStorageByKey(['mode', state.mode]);
    },
    setToggleSidebar(state) {
      state.isToggleSidebar = !state.isToggleSidebar;
    },
    setToggleLoading(state, { payload }) {
      state.isLoading = payload;
    },
  },
});

export const { setMode, setToggleSidebar, setToggleLoading } = common.actions;

export default common.reducer;
