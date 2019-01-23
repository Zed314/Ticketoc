name := "ingestion"

organization := "fr.insa.ticketoc"

version := "1.0.0-SNAPSHOT"

scalaVersion := "2.11.11"

val sparkVersion = "2.4.0"

libraryDependencies ++= Seq(
  "org.apache.spark" %% "spark-core"                 % sparkVersion % "provided",
  "org.apache.spark" %% "spark-streaming"            % sparkVersion,
  "org.apache.spark" %% "spark-streaming-kafka-0-10" % sparkVersion,
  "org.apache.spark" %% "spark-sql"                  % sparkVersion,
  "org.apache.spark" %% "spark-sql-kafka-0-10"       % sparkVersion
)

excludeDependencies ++= Seq(
   ExclusionRule(organization = "org.glassfish.hk2.external")
)

assemblyMergeStrategy in assembly := {
  case PathList("org", "apache", xs @ _*) => MergeStrategy.last
  case "overview.html"                    => MergeStrategy.rename
  case "git.properties"                   => MergeStrategy.last
  case x => {
    val oldStrategy = (assemblyMergeStrategy in assembly).value
    oldStrategy(x)
  }
}
