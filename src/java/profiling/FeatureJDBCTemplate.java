/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package profiling;
import java.util.List;
import javax.sql.DataSource;
import org.springframework.jdbc.core.JdbcTemplate;

/**
 *
 * @author yan
 */

public class FeatureJDBCTemplate implements FeatureDAO{
    
    private DataSource dataSource;
    private JdbcTemplate jdbcTemplateObject;
   
    public void setDataSource(DataSource dataSource) {
        this.dataSource = dataSource;
        this.jdbcTemplateObject = new JdbcTemplate(dataSource);
    }
    
    public void create(String name, double value1, double value2, double value3, double value4, double value5) {
        String SQL = "insert into DataPoints (name, value1, value2, value3, value4, value5) values (?, ?, ?, ?, ?,?)";
        jdbcTemplateObject.update( SQL, name, value1, value2, value3, value4, value5);
        return;
    }
    
    public Feature getFeature(Integer id) {
        String SQL = "select * from DataPoints where id = ?";
        Feature feature = jdbcTemplateObject.queryForObject(SQL, 
            new Object[]{id}, new FeatureMapper());
      
        return feature;
    }
    
    public List<Feature> listFeatures() {
        String SQL = "select * from DataPoints";
        List <Feature> features = jdbcTemplateObject.query(SQL, new FeatureMapper());
        JdbcTemplate jdbcTemplateObject = new JdbcTemplate(dataSource);
        return features;
    }
    
    public void delete(Integer id) {
        String SQL = "delete from DataPoints where id = ?";
        jdbcTemplateObject.update(SQL, id);
        System.out.println("Deleted Record with ID = " + id );
        return;
    }
    
    public void update(Integer id, double value1, double value2, double value3, double value4, double value5){
        String SQL = "update DataPoints set value1 = ? , value2 = ? , value3 = ? , value4 = ? , value5 = ?  where id = ?";
        jdbcTemplateObject.update(SQL, id, value1, value2, value3, value4, value5);
        System.out.println("Updated Record with ID = " + id );
        return;
    }
}
