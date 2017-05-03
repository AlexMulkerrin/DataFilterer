package DataFilterer.controller;

import DataFilterer.model.LogEntry;
import DataFilterer.service.LogEntryServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/logs")
public class LogEntryController {

    private LogEntryServiceImpl logEntryServiceImpl;

    @Autowired
    public LogEntryController(LogEntryServiceImpl logEntryServiceImpl) {
        this.logEntryServiceImpl = logEntryServiceImpl;
    }

    @GetMapping
    @ResponseBody
    public Iterable<LogEntry> getAllLogEntries() {
        return logEntryServiceImpl.getLogEntries();
    }

    @GetMapping(value="/country/{countryCode}")
    @ResponseBody
    public Iterable<LogEntry> getByCountryCode(@PathVariable String countryCode){
        return logEntryServiceImpl.getLogEntriesByCountryCode(countryCode);
    }

    @GetMapping(value="/responseTimeGreater/{time}")
    @ResponseBody
    public Iterable<LogEntry> getByResponseTimeGreater(@PathVariable int time){
        return logEntryServiceImpl.getLogEntriesGreaterThan(time);
    }

    @PostMapping(value="/create")
    public LogEntry postResponseTimeDataObject(@RequestBody LogEntry logEntry){
        return logEntryServiceImpl.createLogEntry(logEntry);

    }

    @GetMapping(value="/aboveAverage")
    @ResponseBody
    public Iterable<LogEntry> getAboveAverage(){
        return logEntryServiceImpl.getAboveAverage();
    }

}
