import { Instance, SnapshotOut, types } from "mobx-state-tree";
import { withEnvironment } from "../extensions/with-environment";

/**
 * Model description here for TypeScript hints.
 */
export const DailyGoalModel = types
  .model("DailyGoal")
  .props({
    title: types.string,
    time: types.number,
    id: types.identifier,
    cancelled: false,
    completed: false
  }).extend(withEnvironment)
  .views(self => ({
    getTime: () => {
      return self.time + 0;
    }
  })) 
  .actions(self => ({
    setCancelled(cancelled: boolean) {
      self.cancelled = cancelled;
    },
    setCompleted(completed: boolean) {
      const prevVal = self.completed;
      self.completed = completed;
      if (completed !== prevVal) {
        self.environment.api.toggleCompletedGoal(self.id, completed)
          .then(res => {
            if (res.kind === "ok") {
              __DEV__ && console.log("Marked as completed");
            } else {
              __DEV__ && console.log(res.kind + " error updating completed");
            }
          })
          .catch(err => {
            __DEV__ && console.error(err);
          });
      }
    }
  })); 

/**
  * Un-comment the following to omit model attributes from your snapshots (and from async storage).
  * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

  * Note that you'll need to import `omit` from ramda, which is already included in the project!
  *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
  */

type DailyGoalType = Instance<typeof DailyGoalModel>
export interface DailyGoal extends DailyGoalType { }
type DailyGoalSnapshotType = SnapshotOut<typeof DailyGoalModel>
export interface DailyGoalSnapshot extends DailyGoalSnapshotType { }
