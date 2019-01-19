name := "KafkaSparkCouchReadWrite"

organization := "ticketoc"

version := "1.0.0-SNAPSHOT"

scalaVersion := "2.11.11"

libraryDependencies ++= Seq(
  "org.apache.spark" %% "spark-core" % "2.2.0",
  "org.apache.spark" %% "spark-streaming" % "2.2.0",
  "org.apache.spark" %% "spark-sql" % "2.2.0",
  "org.apache.spark" %% "spark-sql-kafka-0-10" % "2.2.0"
).map(_.excludeAll(ExclusionRule("org.glassfish.hk2"),ExclusionRule("javax.validation")))

libraryDependencies += "org.apache.spark" % "spark-streaming-kafka-0-10_2.11" % "2.2.0"
