-module(building).
-export([create_floors/2, find_occupied_flats/2]).

create_floors(1, Flats) -> create_list(Flats);
create_floors(Floors, Flats) -> [create_list(Flats) | [create_floors(Floors - 1, Flats)]].

create_list(1) -> [1];
create_list(N) -> create_list(N-1) ++ [N].

% For the whole building
find_occupied_flats([], []) -> [];
find_occupied_flats([F_head | F_tail], [O_head | O_tail]) -> [occupied(F_head, O_head) | find_occupied_flats(F_tail, O_tail)].

% To sccumulate for single floor
occupied([], []) -> [];
occupied([_F_head | F_tail], [O_head | O_tail]) when O_head == 0 -> occupied(F_tail, O_tail);
occupied([F_head | F_tail], [O_head | O_tail]) when O_head == 1 -> [F_head | occupied(F_tail, O_tail)].
% building:find_occupied_flats([[1,2],[1,2]],[[1,0],[0,1]]).