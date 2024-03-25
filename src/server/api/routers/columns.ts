import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";

export const columnsRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ title: z.string().min(1) }))
    .mutation(({ctx, input}) => {
      return ctx.db.column.create({
        data: {
          title: input.title,
          createdBy:  { connect: { id: ctx.session.user.id } }
        }
      });
    }),

  updateTitle: protectedProcedure
    .input(z.object({ id: z.string(), title: z.string().min(1) }))
    .mutation(({ctx, input}) => {
      return ctx.db.column.update({
        where: {
          id: input.id,
        },
        data: {
          title: input.title,
        },
      });
    }),

  getAll: protectedProcedure
    .query(({ ctx }) => {
      return ctx.db.column.findMany({
        orderBy: {
          createdAt: "asc",
        }
      });
    }),

  getById: protectedProcedure
    .input(z.object({ id: z.string().min(1) }))
    .query(({ ctx, input }) => {
      return ctx.db.column.findFirst({
        where: {
          id: input.id,
        },
      });
    }),

  deleteById: protectedProcedure
    .input(z.object({ id: z.string().min(1) }))
    .mutation(({ ctx, input }) => {
      return ctx.db.column.delete({
        where: {
          id: input.id,
        },
      });
    }),
});
