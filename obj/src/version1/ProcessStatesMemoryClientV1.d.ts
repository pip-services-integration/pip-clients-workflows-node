import { IProcessStatesClient } from "./IProcessStatesClient";
import { FilterParams, PagingParams } from "pip-services3-commons-node";
import { MessageV1 } from "./MessageV1";
import { ProcessStateV1 } from "./ProcessStateV1";
export declare class ProcessStatesMemoryClientV1 implements IProcessStatesClient {
    getProcesses(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: import("pip-services3-commons-node").DataPage<ProcessStateV1>) => void): void;
    getProcessById(correlationId: string, processId: string, callback: (err: any, state: ProcessStateV1) => void): void;
    startProcess(correlationId: string, processType: string, processKey: string, taskType: string, queueName: string, message: MessageV1, timeToLive: number, callback: (err: any, state: ProcessStateV1) => void): void;
    activateOrStartProcess(correlationId: string, processType: string, processKey: string, taskType: string, queueName: string, message: MessageV1, timeToLive: number, callback: (err: any, state: ProcessStateV1) => void): void;
    activateProcess(correlationId: string, processId: string, taskType: string, queueName: string, message: MessageV1, callback: (err: any, state: ProcessStateV1) => void): void;
    activateProcessByKey(correlationId: string, processType: string, processKey: string, taskType: string, queueName: string, message: MessageV1, callback: (err: any, state: ProcessStateV1) => void): void;
    rollbackProcess(correlationId: string, state: ProcessStateV1, callback: (err: any) => void): void;
    continueProcess(correlationId: string, state: ProcessStateV1, callback: (err: any) => void): void;
    continueAndRecoverProcess(correlationId: string, state: ProcessStateV1, recoveryQueue: string, recoveryMessage: MessageV1, recoveryTimeout: number, callback: (err: any) => void): void;
    repeatProcessRecovery(correlationId: string, state: ProcessStateV1, recoveryTimeout: number, callback: (err: any) => void): void;
    clearProcessRecovery(correlationId: string, state: ProcessStateV1, callback: (err: any) => void): void;
    failAndContinueProcess(correlationId: string, state: ProcessStateV1, errorMessage: string, callback: (err: any) => void): void;
    failAndRecoverProcess(correlationId: string, state: ProcessStateV1, errorMessage: string, recoveryQueue: string, recoveryMessage: MessageV1, recoveryTimeout: number, callback: (err: any) => void): void;
    suspendProcess(correlationId: string, state: ProcessStateV1, request: string, recoveryQueue: string, recoveryMessage: MessageV1, recoveryTimeout: number, callback: (err: any) => void): void;
    failProcess(correlationId: string, state: ProcessStateV1, errorMessage: string, callback: (err: any) => void): void;
    resumeProcess(correlationId: string, state: ProcessStateV1, comment: string, callback: (err: any, state: ProcessStateV1) => void): void;
    completeProcess(correlationId: string, state: ProcessStateV1, callback: (err: any) => void): void;
    abortProcess(correlationId: string, state: ProcessStateV1, comment: string, callback: (err: any) => void): void;
    updateProcess(correlationId: string, state: ProcessStateV1, callback: (err: any, state: ProcessStateV1) => void): void;
    deleteProcessById(correlationId: string, processId: string, callback: (err: any, state: ProcessStateV1) => void): void;
    requestProcessForResponse(correlationId: string, state: ProcessStateV1, request: string, recoveryQueueName: string, recoveryMessage: MessageV1, callback: (err: any, state: ProcessStateV1) => void): void;
}
