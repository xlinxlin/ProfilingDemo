package profiling;
import java.util.List;
import javax.sql.DataSource;

/**
 * This is the FeatureDao calss.
 * 
 * @author yan
 */
public interface FeatureDAO {
   
  /**
   * Sets data source.
   * @param ds data source.
   */
   public void setDataSource(DataSource ds);
   
  /**
   * Creates feature.
   * @param name feature name.
   * @param value1 feature value1.
   * @param value2 feature value2.
   * @param value3 feature value3.
   * @param value4 feature value4.
   * @param value5 feature value5.
   */
   public void create(String name, double value1,double value2,double value3,double value4,double value5);
   
  /**
   * Gets feature.
   * @param id feature id.
   */
   public Feature getFeature(int id);
   
  /**
   * Feature list. 
   */
   public List<Feature> listFeatures();
   
  /**
   * Deletes feature..
   * @param id feature id.
   */
   public void delete(int id);
   
  /**
   * Updates feature.
   * @param id feature id.
   * @param value1 feature value1.
   * @param value2 feature value2.
   * @param value3 feature value3.
   * @param value4 feature value4.
   * @param value5 feature value5.
   */
   public void update(int id, double value1,double value2,double value3,double value4,double value5);
}