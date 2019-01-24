package Infra

import org.apache.spark.util.AccumulatorV2


case class TicketAccumulator(initialValue : Float = 0) extends AccumulatorV2[Float, Float] {

	private var _value = initialValue

	override def value:Float = _value

	override def isZero: Boolean = value == 0

	override def copy(): AccumulatorV2[Float, Float] = TicketAccumulator(value)

	override def reset(): Unit = value

	override def add(v: Float): Unit = {
		_value += v
	}

	override def merge(other: AccumulatorV2[Float, Float]): Unit = add(other.value)

}
