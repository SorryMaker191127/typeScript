/**
 * 结构化类型系统
 * 类型检查关注的是所具有的形状
 */
class Point2D{
    x:number
    y:number
}
class Point3D{
    x:number
    y:number
    z:number
}
let point:Point2D = new Point3D();