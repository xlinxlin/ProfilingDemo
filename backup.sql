-- MySQL dump 10.13  Distrib 5.7.18, for Linux (x86_64)
--
-- Host: localhost    Database: test
-- ------------------------------------------------------
-- Server version	5.7.18-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `DataPoints`
--

DROP TABLE IF EXISTS `DataPoints`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `DataPoints` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` char(10) NOT NULL,
  `value1` double DEFAULT NULL,
  `value2` double DEFAULT NULL,
  `value3` double DEFAULT NULL,
  `value4` double DEFAULT NULL,
  `value5` double DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=618 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DataPoints`
--

LOCK TABLES `DataPoints` WRITE;
/*!40000 ALTER TABLE `DataPoints` DISABLE KEYS */;
INSERT INTO `DataPoints` VALUES (518,'P3552',-1.231871430386553,-4.757133865121485,3.557029668106109,1.3799381431231161,-4.191717443634287),(519,'P5629',-1.8950363141575655,0.8723879231920222,2.9257150144532655,0.3228669637263941,3.413695679938339),(520,'P660',-2.3342097939456083,-3.009309862963244,4.842474275082026,3.9470859338987747,2.77422418398508),(521,'P8408',1.8612861604856645,-4.073598891181643,3.2489194253648748,2.698831687450447,1.4598407195813952),(522,'P7570',4.322726324635269,1.5543959916099181,-3.732233377470121,2.793435395880733,-4.032022836138838),(523,'P4821',-4.792239020880994,-1.201991200939121,-0.27082099279262906,-2.6536569995660475,-0.7142395904856711),(524,'P6777',-3.549317999415631,4.3889430822395035,-4.383634500466593,0.523612877144525,-2.3689940767882356),(525,'P2170',4.85053427601353,3.1398707312135663,0.9437864964316685,2.415403255534528,2.363057261204772),(526,'P8489',3.5345043722424396,-1.0442316313116686,2.5548618681827673,4.638653531378887,-2.4305193564411343),(527,'P2544',-3.3310358274478657,-3.978085626544139,1.3487279625932258,-0.40130364148711095,0.6589526542865807),(528,'P7522',-3.321348092513258,-2.5204435349032526,0.6778516776083894,4.609340828988193,-0.8936952707780277),(529,'P8908',-1.6777431243579954,3.8634404242512375,4.661115395867043,-4.8984857812057285,-2.6644913268382178),(530,'P2462',0.7055336651260555,1.4461621796353903,0.18571318831974715,-1.99257703961353,-0.927514892175485),(531,'P2896',-4.873448175025263,-4.5392397509489815,3.9622650860728097,4.76453588124947,4.256148970830274),(532,'P2795',-2.0222195638215945,-2.876216097435899,3.010861542615551,-3.6643847782290653,-1.1724168854243597),(533,'P2847',1.9097000428370592,-0.02957788890780577,4.886626219228074,0.76339341912065,2.090971575738269),(534,'P9150',-3.739280283790211,1.5113787289333294,4.064312948260939,-3.6176011693646224,-2.7704619001383346),(535,'P2575',-1.932057062321475,-0.9249700240110235,-0.4715032534688497,2.086136477645928,-0.11351104353590458),(536,'P5074',1.0897927615324443,3.9849874019868494,-2.7849180933193574,1.1689195338865517,1.0044544702971479),(537,'P1045',4.952863186478918,1.4836590961931773,-1.4014236055273308,3.396057880301683,-2.8456519232257915),(538,'P186',0.8487014298763809,-3.514708549862262,-2.9377968452565693,-3.003494210607233,-2.6302829555023366),(539,'P4051',-4.522491103386917,-4.110086809596252,2.3770892702536752,1.4064514017945058,-1.8049202807980338),(540,'P8420',4.207762606737184,2.8130124861723864,3.7022746380895306,-3.5103541481759146,-0.21516640809958876),(541,'P2021',-3.9830134221426396,1.7948488552009927,-2.7996573694605997,4.3244407563530824,-2.316927502287678),(542,'P2838',-3.964723495701401,-0.19419436383323418,-0.4486900565465799,1.781789149258132,1.3585695227219174),(543,'P5085',-3.514259630806901,-2.737707898616647,2.1327824587550808,-4.049494846803128,-0.6335188072825639),(544,'P5808',-3.108005200854429,-2.977664123643411,-1.9041913254592635,1.5926712423168947,-0.2144599131783984),(545,'P5282',-3.9301567283404824,3.809440582216217,-3.2768132129198255,2.1207546610961625,-2.8297669531440617),(546,'P9108',3.5061943871178887,3.9183428723145415,-1.6170430015733537,0.3445896753883071,0.5050251250285731),(547,'P5067',0.13857538979058948,-4.516682616726063,-2.404860868723583,-0.2871115564456215,3.4853046250167523),(548,'P5712',1.6111366746832099,-1.8452897226179377,1.4118064896067493,-0.42225216260708365,-2.0646535146587732),(549,'P6124',-2.2535165537263744,3.0171326376990315,-1.1379590558527841,-3.972876619635567,4.049949690930198),(550,'P5347',2.0508596828427077,3.523851245704927,-4.61069294872559,-4.077061284929314,1.3809527762338334),(551,'P6299',-1.972737301394416,-0.5128794863177122,2.73289955607021,2.9179180238495395,-1.5245250226983806),(552,'P1146',1.525021911754929,-2.034533389093257,2.343980756185257,-0.5742334541170591,2.8202752764204453),(553,'P7390',-1.2705419225420322,2.9241876173815093,-1.6739334650316895,2.352284896061004,-1.0228025232422358),(554,'P7693',-2.2653703353405916,2.8252866918400574,-0.3387077819624471,2.863001469441304,0.8592975846040343),(555,'P9218',-4.330941476566067,-1.039519667959914,-0.9126486757936982,-0.1109568657101514,1.7799052545754162),(556,'P8702',0.6921450916502048,-4.636920919236722,-1.0073442244285378,2.0108183292222437,0.8578859657551883),(557,'P6115',1.062337157192621,-4.781539634267549,-0.9409294712157763,1.4514183979209747,1.0246230810731145),(558,'P7584',3.2419436507163795,2.7557330426410207,1.163911494849926,-1.1249736800769328,2.3597493783654597),(559,'P5945',3.386682333549997,-0.022983031573660995,2.0076161964804085,0.14070204473742987,-4.827948018869112),(560,'P804',-1.9036826691813125,3.4929680086300436,-2.052002433121376,-1.1036169257348782,-3.6519621065458585),(561,'P9895',-2.1227880531472296,3.6086912670630937,4.17996754488799,2.760293735766128,-3.7472122528696215),(562,'P8575',4.422592455110516,0.12060349723146846,4.745577447309774,-4.539746976007571,-1.8239181763693422),(563,'P602',0.9782788663171216,-0.07055864512679921,-3.27145289996871,0.5743186733633188,-4.40211615642613),(564,'P8484',-2.284004322436086,-0.4017864973787937,-2.1526544811268957,-4.132934230358478,-2.0828160085498104),(565,'P9087',-2.167962778036582,-1.7011682891222293,2.4798859046689694,3.2544871597605756,1.8894628031125817),(566,'P1987',0.5168806960019285,3.230213961991744,-3.854686424012772,-4.918299477549902,-1.5100888102968568),(567,'P8283',-4.592589747353152,1.6035733954419529,-1.0164561752503243,4.145259380682635,2.715322733823421),(568,'P4788',-0.4146253406703,0.6606517189025567,-0.6615529154252675,-2.708625433963967,-1.0860657583067166),(569,'P4145',2.81627147630258,2.2774922338715804,0.5950188152888334,4.344393671426079,-4.289341501395015),(570,'P5985',4.9802028170713,-1.0256583558166543,-0.34127413612583624,3.9132292664979733,1.4181107587807933),(571,'P9836',0.2856751433711384,1.1816035202947273,-2.4457558742279586,-4.367574922898808,3.5588834973490897),(572,'P2717',-1.3351760188864215,4.543404973731832,0.38935953711517435,4.995711916032718,-4.872676289190556),(573,'P2975',-1.179555993936936,1.7886125657204204,0.003684184185491546,-0.8773784894255252,2.9017297244717257),(574,'P5257',-3.718721358768752,-4.178178353205835,-0.9951896076653473,-2.726822874479926,2.1041236219029855),(575,'P2832',-2.493051469522851,3.2787997295744056,2.9959589764339523,2.0137419630445343,0.19361022966145036),(576,'P2910',1.8127509609789314,-0.14236277514314555,-2.403592002142323,-4.065788430847153,-0.050967007096654804),(577,'P3946',-1.9936386295273687,-1.8985234626397118,1.4406146593628657,1.8040406244174187,2.505167457917511),(578,'P5949',-0.4862230520672366,-3.848071691826945,-4.269509478780083,3.3223881425022412,-3.9608121947658184),(579,'P5082',2.7623385148538,-3.1496165031712886,-1.157998074651517,-3.969338491383161,0.11474298792842585),(580,'P2456',1.1504505171798964,-1.863012904049545,-1.5053072413104074,-2.736515316584931,0.11225879762461766),(581,'P2596',-3.490284011401832,-3.8740459441909634,-2.318101134133145,2.99616919162922,-2.1991527717609163),(582,'P5251',3.5144394480163648,3.597913121394626,3.6153946379125923,0.8723966649663417,0.20166174085204602),(583,'P4273',-4.369263687743283,-1.7177409091587101,0.3791761859039111,-3.2872553978803545,-0.9880868623130725),(584,'P5144',4.595764716922044,3.498841738628551,-3.1539951549874456,0.5407918207496065,1.4633983156322694),(585,'P3647',4.485974068350895,-1.3631643607062136,3.1077529351049034,4.133869447114387,-2.3277937194998333),(586,'P9753',-4.576751644760789,2.6596198178344013,4.819487252374824,3.606935017830242,4.2529121747435035),(587,'P2026',-2.6103396873765394,-0.6498328766721677,-0.9240717722556235,-4.56409856288019,2.5537889562324683),(588,'P4019',-0.3907151347080573,-0.4810750007769222,0.8687662330606472,1.4869823820684829,1.6948459037196626),(589,'P7251',2.199129830455605,3.877950868638349,3.3226029094485394,4.175362465477136,3.1302054190704176),(590,'P2142',-0.15918032912872704,-2.146186332854075,-4.313471173164515,3.489927973379052,-0.1001523275558922),(591,'P8380',4.72049241318982,-1.5428283877365443,1.7990354151026944,0.014671929100246395,3.526791384438379),(592,'P4698',3.87851178803502,4.617718139495841,-0.5989628872103658,-4.4341483041005265,-1.602380301297627),(593,'P3623',-0.5911392199535719,4.613426099111567,1.322004044761651,1.7178333729236561,3.0362780281844426),(594,'P8174',3.2912281924672424,-1.3575802419498184,0.7918049023220792,3.264869896065612,3.760577583348976),(595,'P328',1.3994886351901208,4.3509205413921865,1.6867572098330994,-4.009012354411721,-4.972920652459802),(596,'P2215',3.602446578726573,-4.678081146214842,2.671574847018504,3.638244612288627,4.19821226417384),(597,'P9890',-0.1682501300363759,-0.7315263097403291,1.1226561518214861,3.9199392359216763,2.1813643304279235),(598,'P2687',0.912983492981426,-1.437007779807872,2.091611578319389,-3.821448985094671,4.452079927898366),(599,'P920',-2.583100547176078,3.4984571335579613,3.7294353336974204,-1.3314429755803712,3.2693378514903806),(600,'P6589',-2.837215026886456,-0.6585734422368104,-2.312580333165676,2.3441106618432386,-3.0838387232315956),(601,'P9082',3.8980189278610418,-1.3564407019579483,4.190711688507589,-3.6619098804605454,-0.64649712089314),(602,'P9828',-1.9615342289051196,-0.7005315133527832,4.122375006570813,1.70455375247169,-4.54341500500246),(603,'P5714',3.660827908959247,1.9346408829018005,1.7765530696841925,3.414951285987179,-0.3148443358259332),(604,'P878',2.795077312394546,-1.92860487136564,-4.707256067629077,4.004173320393566,-0.7110447280850796),(605,'P6544',-2.4103896824235136,-0.6903550100987346,-2.370753868939761,2.378904253235347,4.396076738661069),(606,'P5637',1.8986113157481412,1.5128750087948797,4.12921669664507,1.7582807056440242,-2.185881404807569),(607,'P7407',-3.7854999081856278,4.796927390080921,1.4493175922143866,-3.190803373694424,3.895605907546317),(608,'P4800',-1.8110297794459607,4.33470836493257,2.5994325356913226,1.57817973093006,4.990543740258797),(609,'P649',1.19713511696495,-2.1076924569238753,2.5841237751482247,-0.5015996288050983,-0.08115628969016964),(610,'P7572',2.1404809030140646,3.6266203978356604,-4.301497165505619,2.418876276446598,-0.377424189834894),(611,'P3211',-3.0211753447019705,0.7758270837083732,1.3595333599326933,-0.5176230086844775,-3.360153791472934),(612,'P6106',3.332978823967384,-3.4260946197778264,0.27050402280659913,4.32929693134912,-4.328285797224626),(613,'P2203',-0.7643059215190213,2.6152263744769177,-1.2313501196246168,-1.842370017243704,-1.8029823647116574),(614,'P9796',1.0992073849699224,-3.703876522633982,-3.289653104219857,-3.1863947733856444,2.368815124399731),(615,'P6889',3.6188306479327146,0.10535796477403903,0.9939232394551638,2.686733089099576,1.6413052534813044),(616,'P999',-1.8516281905715095,1.2219655526815218,4.723206996839771,4.370453168048137,-4.633943431335527),(617,'P8042',-1.310019188126199,0.9627671056551605,-2.613315280776105,4.033207340787516,0.24805379760012336);
/*!40000 ALTER TABLE `DataPoints` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-06-21 10:56:25
