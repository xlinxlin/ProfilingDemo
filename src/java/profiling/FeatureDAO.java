/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package profiling;
import java.util.List;
import javax.sql.DataSource;

/**
 *
 * @author yan
 */

public interface FeatureDAO {
   
   public void setDataSource(DataSource ds);
   
   
   public void create(String name, double value1,double value2,double value3,double value4,double value5);
   
   
   public Feature getFeature(Integer id);
   
  
   public List<Feature> listFeatures();
   
   
   public void delete(Integer id);
   
   
   public void update(Integer id, double value1,double value2,double value3,double value4,double value5);
}
