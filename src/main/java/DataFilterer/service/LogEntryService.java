package DataFilterer.service;

import DataFilterer.model.LogEntry;

public interface LogEntryService {
    public Iterable<LogEntry> getLogEntries();

    public Iterable<LogEntry> getLogEntriesByCountryCode(String countryCode);

    public LogEntry createLogEntry(LogEntry responseTimeDataObject);

    public Iterable<LogEntry> getLogEntriesGreaterThan(int responseTime);

    public Iterable<LogEntry> getAboveAverage();
}
