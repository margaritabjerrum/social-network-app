import { authRoutes } from '@auth/routes/authRoutes';
import { currentUserRoutes } from '@auth/routes/currentRoutes';
import { commentRoutes } from '@comment/routes/commentRountes';
import { followerRoutes } from '@follower/routes/followerRoutes';
import { authMiddleware } from '@global/helpers/auth.middleware';
import { notificationRoutes } from '@notification/routes/notificationRoutes';
import { postRoutes } from '@post/routes/post.routes';
import { reactionRoutes } from '@reaction/routes/reaction.routes';
import { serverAdapter } from '@service/queues/base.queue';
import { Application } from 'express';

const BASE_PATH = '/api/v1';

export default (app: Application) => {
  const routes = () => {
    app.use('/queues', serverAdapter.getRouter());
    app.use(BASE_PATH, authRoutes.routes());
    app.use(BASE_PATH, authRoutes.signoutRoute());

    app.use(BASE_PATH, authMiddleware.verifyUser, currentUserRoutes.routes());
    app.use(BASE_PATH, authMiddleware.verifyUser, postRoutes.routes());
    app.use(BASE_PATH, authMiddleware.verifyUser, reactionRoutes.routes());
    app.use(BASE_PATH, authMiddleware.verifyUser, commentRoutes.routes());
    app.use(BASE_PATH, authMiddleware.verifyUser, followerRoutes.routes());
    app.use(BASE_PATH, authMiddleware.verifyUser, notificationRoutes.routes());
  };
  routes();
};
