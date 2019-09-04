/**
 * Created by Amy on 2019/8/31.
 */
var myfunction = {
  getDataBuffer: function() {
    var dataBuffer = {
      MajorBOKeys: [],
      MajorBOKeyTypes: [],
      MajorBOKeyAlias: [],
      BOEditorItemComponents: [],
      MajorBOMappingSelectOption: "",
      SelectionOptionDatas: [],
      MajorBOMappingSeletionPairs: new Map(),
      SelectionOptionDataPairs: new Map(),
      editorItemConfig: [],
      EditorButtonConfig: [],
      dataForPOST:""
    }
    return dataBuffer;
  }
}

export default myfunction
