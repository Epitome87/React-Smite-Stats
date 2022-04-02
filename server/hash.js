import crypto from "crypto"
import md5 from "md5"
//example method name: "createsession". Method name should not include the response type, just the name of the method
//time should use a utc timestamp: yyyyMMddHHmmss
export default function getSignature(devId, methodName, authKey, time){
    var concat = devId + methodName + authKey + time
    return(
        md5(concat)
    )
}