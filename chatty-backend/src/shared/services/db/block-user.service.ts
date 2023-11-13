import mongoose from 'mongoose';
import { PushOperator } from 'mongodb';
import { UserModel } from '@user/models/user.schema';

class BlockUserService {
  public async blockUser(userId: string, followerId: string): Promise<void> {
    const userIdObj = new mongoose.Types.ObjectId(userId);
    const followerIdObj = new mongoose.Types.ObjectId(followerId);

    UserModel.bulkWrite([
      {
        updateOne: {
          filter: { _id: userIdObj, blocked: { $ne: followerIdObj } },
          update: {
            $push: {
              blocked: followerIdObj
            } as PushOperator<Document>
          }
        }
      },
      {
        updateOne: {
          filter: { _id: followerIdObj, blockedBy: { $ne: userIdObj } },
          update: {
            $push: {
              blockedBy: userIdObj
            } as PushOperator<Document>
          }
        }
      }
    ]);
  }

  public async unblockUser(userId: string, followerId: string): Promise<void> {
    UserModel.bulkWrite([
      {
        updateOne: {
          filter: { _id: userId },
          update: {
            $pull: {
              blocked: new mongoose.Types.ObjectId(followerId)
            } as PushOperator<Document>
          }
        }
      },
      {
        updateOne: {
          filter: { _id: followerId },
          update: {
            $pull: {
              blockedBy: new mongoose.Types.ObjectId(userId)
            } as PushOperator<Document>
          }
        }
      }
    ]);
  }
}

export const blockUserService: BlockUserService = new BlockUserService();
