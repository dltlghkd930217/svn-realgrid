import { ValueType } from "realgrid";


export const fields = [
  {
    fieldName: "number",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "sys_id",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "opened",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "short_description",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "caller_name",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "caller_sys_id",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "priority",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "state",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "category",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "channel",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "assignment_group_sys_id",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "assignment_group_name",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "assigned_to_name",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "assigned_to_sys_id",
    dataType: ValueType.TEXT,
  }
];

export const columns = [
  {
    name: "number",
    fieldName: "number",
    type: "data",
    width: "80",
    styles: {
      textAlignment: "center",
    },
    header: {
      text: "number",
      showTooltip: true,
      tooltip: '<span style="color: red;">이름</span>',
    },
    renderer: {
        type: "html",
      callback: function (grid, cell, w, h) {
        var str = `<button onclick="firstBtnClicked(${cell.index.itemIndex})">버튼1</button>`;
        return str;
      },
        showTooltip: true
    }
  },
  {
    name: "sys_id",
    fieldName: "sys_id",
    type: "data",
    width: "150",
    styles: {
      textAlignment: "center",
    },
    header: {
      text: "sys_id",
      showTooltip: false,
    },
  },  
  {
    name: "opened",
    fieldName: "opened",
    type: "data",
    width: "150",
    styles: {
      textAlignment: "center",
    },
    header: {
      text: "opened",
      showTooltip: false,
    },
  },
  {
    name: "short_description",
    fieldName: "short_description",
    type: "data",
    width: "220",
    styles: {
      textAlignment: "center",
    },
    header: "short_description",
  },  
  {
    name: "caller_name",
    fieldName: "caller_name",
    type: "data",
    width: "150",
    styles: {
      textAlignment: "center",
    },
    header: {
      text: "caller_name",
      showTooltip: false,
    },
  },  
  {
    name: "caller_sys_id",
    fieldName: "caller_sys_id",
    type: "data",
    width: "150",
    styles: {
      textAlignment: "center",
    },
    header: {
      text: "caller_sys_id",
      showTooltip: false,
    },
  },  
  {
    name: "priority",
    fieldName: "priority",
    type: "data",
    width: "100",
    popupMenu: "menu1",
    button: "popup",
    buttonVisibility: "always",
    styles: {
      textAlignment: "center",
    },
    header: {
      text: "priority",
      showTooltip: false,
    },
  },  
  {
    name: "state",
    fieldName: "state",
    type: "data",
    width: "150",
    styles: {
      textAlignment: "center",
    },
    header: {
      text: "state",
      showTooltip: false,
    },
  },  
  {
    name: "category",
    fieldName: "category",
    type: "data",
    width: "150",
    styles: {
      textAlignment: "center",
    },
    header: {
      text: "category",
      showTooltip: false,
    },
  },  
  {
    name: "channel",
    fieldName: "channel",
    type: "data",
    width: "150",
    styles: {
      textAlignment: "center",
    },
    header: {
      text: "channel",
      showTooltip: false,
    },
  },
  {
    name: "assignment_group_sys_id",
    fieldName: "assignment_group_sys_id",
    type: "data",
    width: "150",
    styles: {
      textAlignment: "center",
    },
    header: {
      text: "assignment_group_sys_id",
      showTooltip: false,
    },
  },  
  {
    name: "assignment_group_name",
    fieldName: "assignment_group_name",
    type: "data",
    width: "150",
    styles: {
      textAlignment: "center",
    },
    header: {
      text: "assignment_group_name",
      showTooltip: false,
    },
  },  
  {
    name: "assigned_to_name",
    fieldName: "assigned_to_name",
    type: "data",
    width: "150",
    styles: {
      textAlignment: "center",
    },
    header: {
      text: "assigned_to_name",
      showTooltip: false,
    },
  },  
  {
    name: "assigned_to_sys_id",
    fieldName: "assigned_to_sys_id",
    type: "data",
    width: "150",
    styles: {
      textAlignment: "center",
    },
    header: {
      text: "assigned_to_sys_id",
      showTooltip: false,
    },
  }
];

export const layouts = [
  "number",
  "sys_id",
  'opened',
  'short_description',
  'caller_name',
  'caller_sys_id',
  'priority',
  'state',
  'category',
  'channel',
  {
      name: 'l1_ag',
      header: {
          text: "Assignment_group",
      },
      expandable: true,
      expanded: false,
      items: [{
              column: "assignment_group_sys_id",
              groupShowMode: "expand"
          },
          {
              column: "assignment_group_name",
              groupShowMode: "always"
          },
      ]
  },
  {
      name: 'l1_assigned_to',
      header: {
          text: "Assigned To",
      },
      expandable: true,
      expanded: false,
      items: [{
              column: "assigned_to_sys_id",
              groupShowMode: "expand"
          },
          {
              column: "assigned_to_name",
              groupShowMode: "always"
          },
      ]
  }
];

