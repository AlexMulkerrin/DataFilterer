package DataFilterer;

import javax.persistence.*;

@Entity
public class ResponseTimeDataObject {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;



    @Column(name = "request_timestamp")
    private int request_timestamp;

    private String country_code;
    private int response_time;

    public int getRequestTimestamp() {
        return request_timestamp;
    }

    public void setRequestTimestamp(int requestTimestamp) {
        this.request_timestamp = requestTimestamp;
    }

    public String getCountry_code() {
        return country_code;
    }
    public void setCountry_code(String country_code) {
        this.country_code = country_code;
    }

    public int getResponse_time() {
        return response_time;
    }
    public void setResponse_time(int response_time) {
        this.response_time = response_time;
    }
}
