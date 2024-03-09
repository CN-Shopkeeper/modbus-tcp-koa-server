var timeValue = (1 / 3) * 1000;
const Notes = {
  begin: 0,
  end: 0,
  stop: 0,
  low_1: 1,
  low_2: 2,
  low_3: 3,
  low_4: 4,
  low_5: 5,
  low_6: 6,
  low_7: 7,
  normal_1: 11,
  normal_2: 12,
  normal_3: 13,
  normal_4: 14,
  normal_5: 15,
  normal_6: 16,
  normal_7: 17,
  high_1: 21,
  high_2: 22,
  high_3: 23,
  high_4: 24,
  high_5: 25,
  high_6: 26,
  high_7: 27,
};
var notations = [
  // 开始置0
  {
    note: Notes.begin,
    duration: timeValue,
  },
  // 1-1
  {
    note: Notes.high_3,
    duration: timeValue,
  },
  {
    note: Notes.high_2,
    duration: timeValue / 2,
  },
  {
    note: Notes.high_1,
    duration: timeValue,
  },
  {
    note: Notes.high_2,
    duration: timeValue / 2,
  },
  // 1-2
  {
    note: Notes.high_3,
    duration: (timeValue / 2) * 1.5,
  },
  {
    note: Notes.high_4,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.high_3,
    duration: timeValue / 2,
  },
  {
    note: Notes.high_2,
    duration: timeValue * 1.5,
  },
  // 1-3
  {
    note: Notes.high_3,
    duration: timeValue,
  },
  {
    note: Notes.high_2,
    duration: timeValue / 2,
  },
  {
    note: Notes.high_1,
    duration: timeValue,
  },
  {
    note: Notes.high_2,
    duration: timeValue / 2,
  },
  // 1-4
  {
    note: Notes.high_3,
    duration: (timeValue / 2) * 1.5,
  },
  {
    note: Notes.high_4,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.high_3,
    duration: timeValue / 2,
  },
  {
    note: Notes.high_2,
    duration: timeValue * 1.5,
  },
  // 2-1
  {
    note: Notes.high_3,
    duration: timeValue,
  },
  {
    note: Notes.high_2,
    duration: timeValue / 2,
  },
  {
    note: Notes.high_1,
    duration: timeValue,
  },
  {
    note: Notes.high_2,
    duration: timeValue / 2,
  },
  // 2-2
  {
    note: Notes.high_3,
    duration: (timeValue / 2) * 1.5,
  },
  {
    note: Notes.high_4,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.high_3,
    duration: timeValue / 2,
  },
  {
    note: Notes.high_2,
    duration: timeValue * 1.5,
  },
  // 2-3
  {
    note: Notes.high_3,
    duration: timeValue,
  },
  {
    note: Notes.high_2,
    duration: timeValue / 2,
  },
  {
    note: Notes.high_1,
    duration: timeValue,
  },
  {
    note: Notes.high_2,
    duration: timeValue / 2,
  },
  // 2-4
  {
    note: Notes.high_3,
    duration: (timeValue / 2) * 1.5,
  },
  {
    note: Notes.high_4,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.high_3,
    duration: timeValue / 2,
  },
  {
    note: Notes.high_2,
    duration: timeValue,
  },
  {
    note: Notes.normal_1,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.normal_1,
    duration: timeValue / 2 / 2,
  },
  // 3-1
  {
    note: Notes.normal_3,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_3,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_2,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_4,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_3,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_2,
    duration: timeValue / 2,
  },
  // 3-2
  {
    note: Notes.normal_2,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_2,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_1,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.normal_1,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.normal_4,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_3,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_2,
    duration: timeValue / 2,
  },
  // 3-3
  {
    note: Notes.normal_2,
    duration: timeValue,
  },
  {
    note: Notes.normal_1,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.normal_2,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.normal_3,
    duration: timeValue * 1.5,
  },
  // 3-4
  {
    note: Notes.stop,
    duration: timeValue * 1.5,
  },
  {
    note: Notes.normal_3,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_5,
    duration: timeValue / 2,
  },
  {
    note: Notes.high_1,
    duration: timeValue / 2,
  },
  // 13, 4-1
  {
    note: Notes.normal_7,
    duration: timeValue,
  },
  {
    note: Notes.high_1,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_7,
    duration: timeValue,
  },
  {
    note: Notes.high_1,
    duration: timeValue / 2,
  },
  // 4-2
  {
    note: Notes.normal_7,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.normal_6,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.normal_5,
    duration: timeValue,
  },
  {
    note: Notes.normal_5,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_2,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_4,
    duration: timeValue / 2,
  },
  // 4-3
  {
    note: Notes.normal_4,
    duration: timeValue,
  },
  {
    note: Notes.normal_3,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_3,
    duration: timeValue,
  },
  {
    note: Notes.low_5,
    duration: timeValue / 2,
  },
  // 4-4
  {
    note: Notes.normal_4,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_3,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_2,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_3,
    duration: timeValue,
  },
  {
    note: Notes.normal_5,
    duration: timeValue / 2,
  },
  // 17, 5-1
  {
    note: Notes.normal_1,
    duration: timeValue * 1.5,
  },
  {
    note: Notes.stop,
    duration: timeValue,
  },
  {
    note: Notes.normal_1,
    duration: timeValue / 2,
  },
  // 5-2
  {
    note: Notes.normal_2,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_1,
    duration: (timeValue / 2) * 1.5,
  },
  {
    note: Notes.low_7,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.normal_1,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_5 / 2,
    duration: timeValue,
  },
  {
    note: Notes.normal_1,
    duration: timeValue / 2,
  },
  // 5-3
  {
    note: Notes.normal_4,
    duration: timeValue,
  },
  {
    note: Notes.normal_3,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_2,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_1,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_1 / 2,
    duration: timeValue,
  },
  // 5-4
  {
    note: Notes.normal_1,
    duration: timeValue * 1.5,
  },
  {
    note: Notes.stop,
    duration: timeValue,
  },
  {
    note: Notes.normal_1,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.normal_2,
    duration: timeValue / 2 / 2,
  },
  // 21, 6-1
  {
    note: Notes.normal_3,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_3,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_2,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_4,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_3,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_2,
    duration: timeValue / 2,
  },
  // 6-2
  {
    note: Notes.normal_2,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_2,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_1,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_4,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_3,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_2,
    duration: timeValue / 2,
  },
  // 6-3
  {
    note: Notes.normal_2,
    duration: timeValue,
  },
  {
    note: Notes.normal_1,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.normal_2,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.normal_3,
    duration: timeValue * 1.5,
  },
  // 6-4
  {
    note: Notes.stop,
    duration: timeValue * 1.5,
  },
  {
    note: Notes.normal_3,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_5,
    duration: timeValue / 2,
  },
  {
    note: Notes.high_1,
    duration: timeValue / 2,
  },
  // 25, 7-1
  {
    note: Notes.normal_7,
    duration: timeValue,
  },
  {
    note: Notes.high_1,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_7,
    duration: timeValue,
  },
  {
    note: Notes.high_1,
    duration: timeValue / 2,
  },
  // 7-2
  {
    note: Notes.normal_7,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.normal_6,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.normal_5,
    duration: timeValue,
  },
  {
    note: Notes.normal_5,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_2,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_4,
    duration: timeValue / 2,
  },
  // 7-3
  {
    note: Notes.normal_4,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_3,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_3,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_3,
    duration: timeValue,
  },
  {
    note: Notes.low_5,
    duration: timeValue / 2,
  },
  // 7-4
  {
    note: Notes.normal_4,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_3,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_2,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_3,
    duration: timeValue,
  },
  {
    note: Notes.normal_5,
    duration: timeValue / 2,
  },
  // 29, 8-1
  {
    note: Notes.normal_1,
    duration: timeValue * 1.5,
  },
  {
    note: Notes.stop,
    duration: timeValue,
  },
  {
    note: Notes.normal_1,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.normal_1,
    duration: timeValue / 2 / 2,
  },
  // 8-2
  {
    note: Notes.normal_2,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_1,
    duration: timeValue,
  },
  {
    note: Notes.normal_1,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_5,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_1,
    duration: timeValue / 2,
  },
  //  8-3
  {
    note: Notes.normal_4,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_4,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.normal_4,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.normal_3,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.normal_2,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.normal_2,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_1,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_1,
    duration: timeValue / 2,
  },
  // 8-4
  {
    note: Notes.normal_1,
    duration: timeValue,
  },
  {
    note: Notes.stop,
    duration: timeValue / 2,
  },
  {
    note: Notes.stop,
    duration: timeValue * 1.5,
  },
  // 33 9-1
  {
    note: Notes.normal_6,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_5,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_5,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_5,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_4,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_4,
    duration: timeValue / 2,
  },
  // 9-2
  {
    note: Notes.normal_3,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_2,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_2,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_2,
    duration: timeValue,
  },
  {
    note: Notes.normal_5,
    duration: timeValue / 2,
  },
  // 9-3
  {
    note: Notes.normal_5,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_4,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.normal_4,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.normal_4,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_4,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_3,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_2,
    duration: timeValue / 2,
  },
  // 9-4
  {
    note: Notes.normal_2,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_1,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_1,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.low_7,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.normal_1,
    duration: timeValue * 1.5,
  },
  // 37, 10-1
  {
    note: Notes.normal_6,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_5,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_5,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_5,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_4,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_4,
    duration: timeValue / 2,
  },
  // 10-2
  {
    note: Notes.normal_3,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_2,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_2,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_2,
    duration: timeValue,
  },
  {
    note: Notes.normal_3,
    duration: timeValue / 2,
  },
  // 10-3
  {
    note: Notes.normal_4,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_3,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.normal_3,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.normal_3,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.normal_3,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.normal_3,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_2,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_3,
    duration: timeValue / 2,
  },
  // 10-4
  {
    note: Notes.high_2,
    duration: timeValue,
  },
  {
    note: Notes.high_1,
    duration: timeValue / 2,
  },
  {
    note: Notes.high_1,
    duration: timeValue,
  },
  {
    note: Notes.high_1,
    duration: timeValue / 2,
  },
  // 41, 11-1
  {
    note: Notes.normal_7,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_6,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_6,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_6,
    duration: timeValue * 1.5,
  },
  // 11-2
  {
    note: Notes.stop,
    duration: timeValue,
  },
  {
    note: Notes.normal_6,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_6,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_5,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_4,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.normal_4,
    duration: timeValue / 2 / 2,
  },
  // 11-3
  {
    note: Notes.normal_4,
    duration: timeValue,
  },
  {
    note: Notes.normal_3,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_3,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.normal_4,
    duration: timeValue / 2 / 2,
  },
  // 11-3 with 11-4
  {
    note: Notes.normal_5,
    duration: timeValue * 1.5,
  },
  {
    note: Notes.stop,
    duration: timeValue * 2.5,
  },
  // 45, 12-1
  {
    note: Notes.normal_3,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.normal_2,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.normal_3,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.normal_2,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.normal_3,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.normal_4,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.normal_5,
    duration: timeValue,
  },
  {
    note: Notes.normal_4,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.normal_5,
    duration: timeValue / 2 / 2,
  },
  // 12-2
  {
    note: Notes.normal_6,
    duration: timeValue,
  },
  {
    note: Notes.normal_6,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.normal_7,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.high_1,
    duration: timeValue,
  },
  {
    note: Notes.high_2,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.high_1,
    duration: timeValue / 2 / 2,
  },
  // 12-3
  {
    note: Notes.normal_5,
    duration: timeValue * 1.5,
  },
  {
    note: Notes.normal_5,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_4,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_4,
    duration: timeValue / 2,
  },
  // 12-4
  {
    note: Notes.normal_3,
    duration: timeValue,
  },
  {
    note: Notes.normal_4,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.normal_3,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.normal_5,
    duration: timeValue * 1.5,
  },
  // 49, 13-1
  {
    note: Notes.normal_3,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.normal_2,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.normal_3,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.normal_2,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.normal_3,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_5,
    duration: timeValue,
  },
  {
    note: Notes.normal_4,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.normal_5,
    duration: timeValue / 2 / 2,
  },
  // 13-2
  {
    note: Notes.normal_6,
    duration: timeValue,
  },
  {
    note: Notes.stop,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.normal_6,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.normal_7,
    duration: timeValue,
  },
  {
    note: Notes.stop,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.normal_3,
    duration: timeValue / 2 / 2,
  },
  // 13-3
  {
    note: Notes.high_3,
    duration: timeValue / 2,
  },
  {
    note: Notes.high_3,
    duration: timeValue / 2,
  },
  {
    note: Notes.high_3,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.high_4,
    duration: timeValue / 2,
  },
  {
    note: Notes.high_3,
    duration: timeValue / 2,
  },
  {
    note: Notes.high_2,
    duration: timeValue / 2,
  },
  // 13-4
  {
    note: Notes.high_2,
    duration: timeValue,
  },
  {
    note: Notes.high_1,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.normal_7,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.high_1,
    duration: timeValue,
  },
  {
    note: Notes.normal_5,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.high_1,
    duration: timeValue / 2 / 2,
  },
  // 53, 14-1
  {
    note: Notes.high_2,
    duration: timeValue / 2,
  },
  {
    note: Notes.high_1,
    duration: timeValue / 2,
  },
  {
    note: Notes.high_1,
    duration: timeValue / 2,
  },
  {
    note: Notes.high_1,
    duration: timeValue,
  },
  {
    note: Notes.normal_5,
    duration: timeValue / 2,
  },
  // 14-2
  {
    note: Notes.high_2,
    duration: timeValue / 2,
  },
  {
    note: Notes.high_1,
    duration: timeValue / 2,
  },
  {
    note: Notes.high_1,
    duration: timeValue / 2,
  },
  {
    note: Notes.high_1,
    duration: timeValue,
  },
  {
    note: Notes.normal_5,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.high_1,
    duration: timeValue / 2 / 2,
  },
  // 14-3
  {
    note: Notes.high_2,
    duration: timeValue / 2,
  },
  {
    note: Notes.high_1,
    duration: timeValue / 2,
  },
  {
    note: Notes.high_1,
    duration: timeValue / 2,
  },
  {
    note: Notes.high_1,
    duration: timeValue,
  },
  {
    note: Notes.normal_5,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.high_1,
    duration: timeValue / 2 / 2,
  },
  // 14-4
  {
    note: Notes.high_2,
    duration: timeValue / 2,
  },
  {
    note: Notes.high_3,
    duration: timeValue / 2 / 2,
  },
  {
    note: Notes.high_2,
    duration: timeValue / 2,
  },
  {
    note: Notes.high_1,
    duration: timeValue,
  },
  {
    note: Notes.high_1,
    duration: timeValue / 2,
  },
  // 57, 15-1
  {
    note: Notes.normal_7,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_6,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_6,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_6,
    duration: timeValue,
  },
  {
    note: Notes.normal_5,
    duration: timeValue / 2,
  },
  // 15-2
  {
    note: Notes.normal_5,
    duration: timeValue,
  },
  {
    note: Notes.normal_4,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_4,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_3,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_2,
    duration: timeValue / 2,
  },
  // 15-3
  {
    note: Notes.normal_3,
    duration: timeValue,
  },
  {
    note: Notes.stop,
    duration: timeValue * 2.5,
  },
  // 15-4
  {
    note: Notes.normal_3,
    duration: timeValue,
  },
  {
    note: Notes.normal_4,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_4,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_4,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_3,
    duration: timeValue / 2,
  },
  {
    note: Notes.normal_2,
    duration: timeValue / 2,
  },
  // 61, 16-1
  {
    note: Notes.normal_1,
    duration: timeValue,
  },

  // 结束置0,
  {
    note: Notes.end,
    duration: timeValue,
  },
];
