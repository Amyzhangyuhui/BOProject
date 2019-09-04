/**
 * Created by Amy on 2019/8/31.
 */
var myfunction = {
  getProps: function() {
    var props = {
        pageURL: "",
        serviceURL: "http://127.0.0.1:8080/",
        ComponentID: "dynamicEditor1",
        MajorTask: "NewBO",
        paras: {
          BOID: "BOID",
          BOKey: "",
          BOKeyValue: "",
          item: {
            type: Object,
            required: true
          }
        },
      }
    return props;
  }
}

export default myfunction
