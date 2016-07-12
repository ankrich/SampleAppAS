package au.com.ankrich.angularSpring.model;

import jdk.nashorn.internal.objects.annotations.Setter;
import lombok.Getter;

/**
 * Created by arichharia on 12/07/2016.
 */

@Getter
@lombok.Setter
public class Event {

    public String id;
    public String name;

    public Event(String id, String name, String desc, String venue, String date) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.venue = venue;
        this.date = date;
    }

    public String desc;
    public String venue;
    public String date;


}
