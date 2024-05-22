import pino from "pino";

/**
 * Get the logger
 */
export const useLogger = () => {
	const config = useRuntimeConfig();
	const logger = pino({
		timestamp: pino.stdTimeFunctions.isoTime,
		level: config.logger.level,
	});
	return logger;
};
