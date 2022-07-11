const UploaderProgress = (dataValue) => {
  console.log(dataValue?.dataValue, "dataValue>>>>>>>>>>>>>>");
  return (
    <>
      <div className="row" style={{ marginTop: "100px" }}>
        <div
          className="col"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden"></span>
          </div>
          <p>{dataValue?.dataValue}</p>
        </div>
      </div>
    </>
  );
};
export default UploaderProgress;
