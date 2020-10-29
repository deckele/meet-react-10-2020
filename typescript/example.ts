/*
typescript basic types:
number // not Number, which is a js number constructor function.
string
boolean
object
(arg: number) => string // function type
*/

type Yo = {
  a: string;
  b: number;
};
type Ho = {
  a: string;
  c: number;
};

type Intersection = Yo & Ho;
type Union = Yo | Ho;

type Inter = string & number;
type Uni = string | number;

let union: Union = { a: "", b: 5, c: 6 };
let inter: Intersection = { a: "", b: 5, c: 6 };

union.a; // ok, only what is both on Yo and on Ho
// union.b - not ok, isn't on both Yo and Ho

inter.a; // all ok, intersection has all the props combined
inter.b;
inter.c;

type GenericObject<T> = { [key: string]: T };
