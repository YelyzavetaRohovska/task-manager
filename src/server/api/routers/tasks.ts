import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";

export const tasksRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ 
      title: z.string(),
      statusId: z.string(),
    }))
    .mutation(({ctx, input}) => {
      return ctx.db.task.create({
        data: {
          title: input.title,
          status: { connect: { id: input.statusId }},
          createdBy:  { connect: { id: ctx.session.user.id } }
        }
      });
    }),

  update: protectedProcedure
    .input(z.object({ 
      id: z.string(),
      title: z.string().min(1),
      description: z.string(),
      statusId: z.string(),
    }))
    .mutation(({ctx, input}) => {
      return ctx.db.task.update({
        where: {
          id: input.id,
        },
        data: {
          title: input.title,
          description: input.description,
          statusId: input.statusId,
        },
      });
    }),

  getAll: protectedProcedure
    .query(({ ctx }) => {
      return ctx.db.task.findMany({
        orderBy: {
          createdAt: "asc",
        }
      });
    }),

  getByStatusId: protectedProcedure
    .input(z.object({
      statusId: z.string(),
    }))
    .query(({ ctx, input }) => {
      return ctx.db.task.findMany({
        where: {
          statusId: input.statusId,
        },
        orderBy: {
          createdAt: "asc",
        }
      });
    }),

  getById: protectedProcedure
    .input(z.object({ id: z.string().min(1) }))
    .query(({ ctx, input }) => {
      return ctx.db.task.findFirst({
        where: {
          id: input.id,
        },
      });
    }),

  deleteById: protectedProcedure
    .input(z.object({ id: z.string().min(1) }))
    .mutation(({ ctx, input }) => {
      return ctx.db.task.delete({
        where: {
          id: input.id,
        },
      });
    }),
});
