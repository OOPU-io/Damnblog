import Types from "mongoose";
interface IUserModel {
  name: string;
  email: string;
  avatar?: string;
  organization?: Types.ObjectId;
}
export default IUserModel;
