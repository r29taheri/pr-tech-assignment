import { find, filter, isEmpty } from "lodash";
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "tournaments",
    initialState: [],
    reducers: {
        ReceivedTournaments: (tournaments, action) =>
            (tournaments = action.payload),
        AddedTournament: (tournaments, action) => {
            const tournament = find(tournaments, ["id", action.payload.id]);
            if (isEmpty(tournament)) {
                tournaments.push(action.payload);
            }
        },
        RemovedTournament: (tournaments, action) =>
            filter(tournaments, (item) => item.id !== action.payload),
    },
});

export const {
    AddedTournament,
    RemovedTournament,
    ReceivedTournaments,
} = slice.actions;

export default slice.reducer;
