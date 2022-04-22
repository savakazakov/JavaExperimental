-module(test).
-export([increment/1 , decrement/1 , double/1, map/2, sumToN/1, create_list/1, area/1, fact/1, parTime/1, seqTime/1, factTime/1, start/0, say_something/2]).


say_something(_What, 0) -> done;
say_something(What, Times) ->
    io:format("~p~n", [What]),
    say_something(What, Times - 1).

start() ->
    spawn(test, say_something, [hello, 3]),
    spawn(test, say_something, [goodbye, 3]).

%--------------------------------------------------------
parTime(V) ->
	spawn(test, factTime, [V]),
	spawn(test, factTime, [V]),
	spawn(test, factTime, [V]),
	spawn(test, factTime, [V]),
	spawn(test, factTime, [V]),
	spawn(test, factTime, [V]),
	spawn(test, factTime, [V]),
	spawn(test, factTime, [V]),
	spawn(test, factTime, [V]),
	spawn(test, factTime, [V]).

factTime(V) ->
    %statistics(runtime),
    statistics(wall_clock),

    test:fact(V),

    {_, Time} = statistics(wall_clock),
    io:format("Code time=~p ms~n",[Time]).


seqTime(V) ->

    statistics(wall_clock),

    test:fact(V),
  	test:fact(V),
  	test:fact(V),
  	test:fact(V),
  	test:fact(V),
  	test:fact(V),
  	test:fact(V),
  	test:fact(V),
  	test:fact(V),
  	test:fact(V),

    {_, Time} = statistics(wall_clock),
    io:format("Code time=~p ms~n",[Time]).


    fact(N) -> fact(1,N,1).
    fact(Current, N, Res) when Current =< N -> NewRes = Res * Current, fact(Current+1,N,NewRes);
    fact(_Current,_N,Res) -> Res.

area({square, Side}) -> Side * Side;
area({circle, Radius}) -> math:pi() * Radius * Radius;
area({triangle, A, B, C}) -> S = (A + B + C) / 2,
math:sqrt(S * (S - A) * (S - B) * (S - C));
area(_Other) -> {error, invalid_object}.

create_list(1) -> [1];
create_list(N) -> create_list(N-1) ++ [N].

p_sumToN(0, Total) -> Total;
p_sumToN(I, Total) -> p_sumToN(I-1, Total+I).

sumToN(N) -> p_sumToN(N, 0).

map(_, []) -> [];
map(F, [H | T]) -> [F(H) | map(F, T)]. 
increment(X) -> X+1.
decrement(X) -> X-1. 
double(X) -> X * 2. 