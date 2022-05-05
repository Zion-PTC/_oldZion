/**
 * @title EQUALITY (==)
 * @syntax x == y
 * @definition The equality operator (==) checks whether its two
 * operands are equal, returning a Boolean result. Unlike the
 * strict equality operator, it attempts to convert and compare
 * operands that are of different types.
 * @description The equality operators (== and !=) use the Abstract
 * Equality Comparison Algorithm to compare two operands.
 * This can be roughly summarized as follows:
 * If the operands are both objects, return true only if both
 * operands reference the same object.
 * •  If one operand is null and the other is undefined, return true.
 * •  If the operands are of different types, try to convert them to
 *    the same type before comparing:
 *    • When comparing a number to a string, try to convert the string
 *      to a numeric value.
 *    • If one of the operands is a boolean, convert the boolean
 *      operand to 1 if it is true and +0 if it is false.
 *    • If one of the operands is an object and the other is a number
 *      or a string, try to convert the object to a primitive using
 *      the object's valueOf() and toString() methods.
 * •  If the operands have the same type, they are compared as follows:
 *    • String: return true only if both operands have the same
 *      characters in the same order.
 *    • Number: return true only if both operands have the same value.
 *      +0 and -0 are treated as the same value. If either operand is NaN,
 *      return false.
 *    • Boolean: return true only if operands are both true or both false.
 * The most notable difference between this operator and the strict equality
 * (===) operator is that the strict equality operator does not attempt type
 * conversion. Instead, the strict equality operator always considers
 * operands of different types to be different.
 */