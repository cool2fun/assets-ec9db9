(function() {
    console.log("Loading upgraded mock Yandex Games SDK (v3)...");
    
    const mockYsdk = {
        onEvent: function(event, callback) {
            console.log("Mock ysdk.onEvent:", event);
        },
        on: function(event, callback) {
            console.log("Mock ysdk.on:", event);
        },
        serverTime: function() {
            return Date.now();
        },
        isAvailableMethod: function() {
            return Promise.resolve(true);
        },
        getFlags: function() {
            return Promise.resolve({});
        },
        dispatchEvent: function(event) {
            console.log("Mock ysdk.dispatchEvent:", event);
        },
        openAuthDialog: function() {
            return Promise.resolve();
        },
        getPlayer: function() {
            return Promise.resolve({
                getMode: function() { return 'lite'; },
                getName: function() { return 'Player'; },
                getPhoto: function() { return ''; },
                getUniqueID: function() { return '123456'; },
                setData: function() { return Promise.resolve(); },
                getData: function() { return Promise.resolve({}); },
                getStats: function() { return Promise.resolve({}); },
                setStats: function() { return Promise.resolve(); }
            });
        },
        getEnvironment: function() {
            return {
                app: { id: "mock-app" },
                browser: { lang: "en" },
                i18n: { tld: "com", lang: "en" },
                payload: ""
            };
        },
        // ADDED environment property to prevent "Cannot read properties of undefined (reading 'app')"
        environment: {
            app: { id: "mock-app" },
            browser: { lang: "en" },
            i18n: { tld: "com", lang: "en" },
            payload: ""
        },
        adv: {
            showFullscreenAdv: function(opts) {
                console.log("Mock showFullscreenAdv called");
                if (opts && opts.callbacks) {
                    if (opts.callbacks.onOpen) opts.callbacks.onOpen();
                    if (opts.callbacks.onClose) opts.callbacks.onClose(true);
                    if (opts.callbacks.onOffline) opts.callbacks.onOffline();
                }
            },
            showRewardedVideo: function(opts) {
                console.log("Mock showRewardedVideo called");
                if (opts && opts.callbacks) {
                    if (opts.callbacks.onOpen) opts.callbacks.onOpen();
                    if (opts.callbacks.onRewarded) opts.callbacks.onRewarded();
                    if (opts.callbacks.onClose) opts.callbacks.onClose();
                    if (opts.callbacks.onOffline) opts.callbacks.onOffline();
                }
            },
            showBannerAdv: function() { console.log("Mock showBannerAdv called"); },
            hideBannerAdv: function() { console.log("Mock hideBannerAdv called"); }
        },
        features: {
            LoadingAPI: {
                ready: function() { console.log("Mock LoadingAPI.ready called"); }
            },
            GameplayAPI: {
                start: function() { console.log("Mock GameplayAPI.start called"); },
                stop: function() { console.log("Mock GameplayAPI.stop called"); }
            },
            GamesAPI: {
                getAllGames: function() { return Promise.resolve([]); },
                getGameByID: function() { return Promise.resolve({}); }
            },
            PluginEngineDataReporterAPI: {
                report: function() {}
            }
        },
        feedback: {
            canReview: function() { return Promise.resolve({ value: true }); },
            requestReview: function() { return Promise.resolve({ feedbackSent: true }); }
        },
        shortcut: {
            canShowPrompt: function() { return Promise.resolve({ canShow: true }); },
            showPrompt: function() { return Promise.resolve({ outcome: 'accepted' }); }
        },
        analytics: {
            yaMetrikaCounter: {
                reachGoal: function() {}
            }
        },
        getLeaderboards: function() {
            return Promise.resolve({
                getLeaderboardDescription: function() { return Promise.resolve({ title: "Leaderboard" }); },
                setLeaderboardScore: function() { return Promise.resolve(); },
                getLeaderboardPlayerEntry: function() { return Promise.resolve({ score: 0 }); },
                getLeaderboardEntries: function() { return Promise.resolve({ entries: [] }); }
            });
        },
        getPayments: function() {
            return Promise.resolve({
                purchase: function() { return Promise.resolve(); },
                getPurchases: function() { return Promise.resolve([]); },
                getCatalog: function() { return Promise.resolve([]); }
            });
        },
        clipboard: {
            writeText: function() { return Promise.resolve(); }
        },
        deviceInfo: {
            isMobile: function() { return false; },
            isTablet: function() { return false; },
            isDesktop: function() { return true; },
            isTV: function() { return false; },
            type: "desktop"
        },
        multiplayer: {
            sessions: {
                init: function() { return Promise.resolve({}); },
                commit: function() {},
                push: function() {}
            }
        },
        EVENTS: {
            HISTORY_BACK: 'HISTORY_BACK',
            ACCOUNT_SELECTION_DIALOG_CLOSED: 'ACCOUNT_SELECTION_DIALOG_CLOSED',
            ACCOUNT_SELECTION_DIALOG_OPENED: 'ACCOUNT_SELECTION_DIALOG_OPENED'
        }
    };

    window.YaGames = {
        init: function() {
            console.log("Mock YaGames.init called");
            return Promise.resolve(mockYsdk);
        }
    };
    console.log("Upgraded Yandex SDK Mock (v3) Loaded");
})();
