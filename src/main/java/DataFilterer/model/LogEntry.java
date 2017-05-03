package DataFilterer.model;

import javax.persistence.*;

@Entity
public class LogEntry {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    //@Column(name = "requestTimestamp")
    private int requestTimestamp;

    private String countryCode;
    private int responseTime;

    public int getRequestTimestamp() {
        return requestTimestamp;
    }

    public void setRequestTimestamp(int requestTimestamp) {
        this.requestTimestamp = requestTimestamp;
    }

    public String getCountryCode() {
        return countryCode;
    }
    public void setCountryCode(String countryCode) {
        this.countryCode = countryCode;
    }

    public int getResponseTime() {
        return responseTime;
    }
    public void setResponseTime(int responseTime) {
        this.responseTime = responseTime;
    }
}
