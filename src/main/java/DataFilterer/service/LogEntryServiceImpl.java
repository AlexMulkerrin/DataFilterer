package DataFilterer.service;

import DataFilterer.model.LogEntry;
import DataFilterer.LogEntryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LogEntryServiceImpl implements LogEntryService {
    private LogEntryRepository logEntryRepository;

    @Autowired
    public LogEntryServiceImpl(LogEntryRepository logEntryRepository) {
        this.logEntryRepository = logEntryRepository;
    }

    @Override
    public Iterable<LogEntry> getLogEntries() {
        return logEntryRepository.findAll();
    }

    @Override
    public Iterable<LogEntry> getLogEntriesByCountryCode(String countryCode) {
        return logEntryRepository.findByCountryCode(countryCode);
    }

    @Override
    public LogEntry createLogEntry(LogEntry logEntry) {
        return logEntryRepository.save(logEntry);

    }
}