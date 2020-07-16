const STORAGE_KEYS = {
    TOURNAMENTS: "tournaments",
};

export function getStorageTournaments() {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEYS.TOURNAMENTS));
}

export function setStorageTournaments(tournaments) {
    window.localStorage.setItem(
        STORAGE_KEYS.TOURNAMENTS,
        JSON.stringify(tournaments)
    );
}
