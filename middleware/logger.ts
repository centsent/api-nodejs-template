export default defineEventHandler(() => {
  const logger = useLogger();
  logger.info("Middleware logger");
});
