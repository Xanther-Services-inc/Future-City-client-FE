function fileUploadReducer(state, action) {
  switch (action.type) {
    case "UPLOAD_ID":
      return {
        ...state,
        id: action.payload,
        idName: action.payloadName,
      };
    case "UPLOAD_BANK_STATEMENT":
      return {
        ...state,
        bankStatement: action.payload,
        bankStatementName: action.payloadName,
      };
    case "UPLOAD_SALARY_SLIP":
      return {
        ...state,
        salarySlip: action.payload,
        salarySlipName: action.payloadName,
      };
    case "UPLOAD_ADDRESS_PROOF":
      return {
        ...state,
        addressProof: action.payload,
        addressProofName: action.payloadName,
      };
    case "UPLOAD_PAYMENT_PROOF":
      return {
        ...state,
        paymentProof: action.payload,
        paymentProofName: action.payloadName,
      };
    case "RESET":
      return {
        id: null,
        idName: null,
        bankStatement: null,
        bankStatementName: null,
        salarySlip: null,
        salarySlipName: null,
        addressProof: null,
        addressProofName: null,
        paymentProof: null,
        paymentProofName: null,
      };
    default:
      break;
  }
}

export default fileUploadReducer;
