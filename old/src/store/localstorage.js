import moment from 'moment';


export default {
  /**
   * The localStorage key used to store state. The default value is redux.
   */
  key: 'dashboard',

  /**
   * Slicer allows us to define our own function which will
   * be used to determine which parts should be synced with localStorage.
   */
  slicer: paths => state => ({
    dashboard: {
      stationIdList: state.dashboard.stationIdList,
      treshold: state.dashboard.treshold,
    },
  })
};
