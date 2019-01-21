package Infra

import org.apache.spark.util.AccumulatorV2


case class TicketAccumulator(initialValue : Long = 0) extends AccumulatorV2[Long, Long] {

	private var _value = initialValue

	override def value:Long = _value

	override def isZero: Boolean = value == 0

	override def copy(): AccumulatorV2[Long, Long] = TicketAccumulator(value)

	override def reset(): Unit = value

	override def add(v: Long): Unit = {
		_value += v
	}

	override def merge(other: AccumulatorV2[Long, Long]): Unit = add(other.value)

}
