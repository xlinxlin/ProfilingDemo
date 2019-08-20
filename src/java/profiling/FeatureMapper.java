package profiling;
import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.jdbc.core.RowMapper;

/**
 * This is the Feature Mapper class.
 * 
 * @author yan
 */
public class FeatureMapper implements RowMapper<Feature> {
    
  /**
   * Maps the feature.
   * @param rs result set.
   * @param rowNum rowNum.
   * @throws java.sql.SQLException
   * @return feature.
   */ 
   public Feature mapRow(ResultSet rs, int rowNum) throws SQLException {
      Feature feature = new Feature();
      feature.setId(rs.getInt("id"));
      feature.setName(rs.getString("name"));
      feature.setValue1(rs.getDouble("value1"));
      feature.setValue2(rs.getDouble("value2"));
      feature.setValue3(rs.getDouble("value3"));
      feature.setValue4(rs.getDouble("value4"));
      feature.setValue5(rs.getDouble("value5"));
      return feature;
   }
}