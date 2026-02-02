import express from "express";
import workspaceController from "../Controller/workspace.controller.js";
import authMiddleware from "../middlewares/auth.middlewares.js";
import workspaceMiddleware from "../middlewares/workspace.middleware.js";
import {channelController}  from "../Controller/channel.controller.js";
import channelMiddleware from "../middlewares/channels.middlewares.js";
import messagesController from "../Controller/messages.controller.js";

const workspaceRouter = express.Router()

workspaceRouter.get('/', authMiddleware, workspaceController.getWorkspaces)
workspaceRouter.post('/', authMiddleware, workspaceController.create)
workspaceRouter.delete('/:workspace_id', authMiddleware, workspaceController.delete)
workspaceRouter.get('/:workspace_id', authMiddleware, workspaceMiddleware(), workspaceController.getById)
workspaceRouter.post('/:workspace_id/members', authMiddleware, workspaceMiddleware(['Admin', 'Owner']), workspaceController.addMemberRequest)
workspaceRouter.get('/:workspace_id/members/accept-invitation', workspaceController.acceptInvitation)
workspaceRouter.get('/:workspace_id/channels', authMiddleware, workspaceMiddleware(),  channelController.getAllByWorkspaceId)
workspaceRouter.post('/:workspace_id/channels', authMiddleware, workspaceMiddleware(['Admin', 'Owner']), channelController.create)
workspaceRouter.post(
    '/:workspace_id/channels/:channel_id/messages',
    authMiddleware,
    workspaceMiddleware(),
    channelMiddleware,
    messagesController.create
)
workspaceRouter.get(
    '/:workspace_id/channels/:channel_id/messages',
    authMiddleware,
    workspaceMiddleware(), 
    channelMiddleware,
    messagesController.getByChannelId
)
workspaceRouter.delete('/:workspace_id/members/:member_id', authMiddleware, workspaceMiddleware(['Admin', 'Owner']), workspaceController.removeMember)



export default workspaceRouter