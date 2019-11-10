package profiling;
import java.util.List;
import javax.sql.DataSource;
import org.springframework.jdbc.core.JdbcTemplate;

/**
 * This is Feature JDBC Template class.
 * 
 * @author yan
 */
public class FeatureJDBCTemplate implements FeatureDAO{
    
    /** Initializes data source. */
    private DataSource dataSource;
    
    /** Initializes JDBC template object. */
    private JdbcTemplate jdbcTemplateObject;
    
   /**
    * Sets data source.
    * @param dataSource data source.
    */
    @Override
    public void setDataSource(DataSource dataSource) {
        this.dataSource = dataSource;
        this.jdbcTemplateObject = new JdbcTemplate(dataSource);
    }
    
   /**
    * Creates feature.
    * @param name feature name.
    * @param value1 feature value1.
    * @param value2 feature value2.
    * @param value3 feature value3.
    * @param value4 feature value4.
    * @param value5 feature value5.
    */
    @Override
    public void create(String name, double value1, double value2, double value3, double value4, double value5) {
        String SQL = "insert into DataPoints (name, value1, value2, value3, value4, value5) values (?, ?, ?, ?, ?,?)";
        jdbcTemplateObject.update( SQL, name, value1, value2, value3, value4, value5);
    }
    
   /**
    * Gets feature.
    * @param id feature id.
    * @return feature with given id.
    */
    @Override
    public Feature getFeature(int id) {
        String SQL = "select * from DataPoints where id = ?";
        Feature feature = jdbcTemplateObject.queryForObject(SQL, 
            new Object[]{id}, new FeatureMapper());
        return feature;
    }
    
   /**
    * Gets feature list.
    * @return feature list.
    */
    @Override
    public List<Feature> listFeatures() {
        String SQL = "select * from DataPoints";
        List <Feature> features = jdbcTemplateObject.query(SQL, new FeatureMapper());
        //JdbcTemplate jdbcTemplateObject = new JdbcTemplate(dataSource);
        return features;
    }
    
   /**
    * Deletes feature.
    * @param id feature id.
    */
    @Override
    public void delete(int id) {
        String SQL = "delete from DataPoints where id = ?";
        jdbcTemplateObject.update(SQL, id);
        System.out.println("Deleted Record with ID = " + id );
    }
    
   /**
    * Updates feature.
    * @param id feature id.
    * @param value1 feature value1.
    * @param value2 feature value2.
    * @param value3 feature value3.
    * @param value4 feature value4.
    * @param value5 feature value5.
    */
    @Override
    public void update(int id, double value1, double value2, double value3, double value4, double value5){
        String SQL = "update DataPoints set value1 = ? , value2 = ? , value3 = ? , value4 = ? , value5 = ?  where id = ?";
        jdbcTemplateObject.update(SQL, id, value1, value2, value3, value4, value5);
        System.out.println("Updated Record with ID = " + id );
    }
}