import { ConfigProvider, Platform } from 'tabby-core'

/** @hidden */
export class SettingsConfigProvider extends ConfigProvider {
    defaults = {
        // [DISABLED] Config Sync functionality is disabled in this build
        // Original configSync defaults preserved for reference:
        // configSync: {
        //     host: null,
        //     token: null,
        //     configID: null,
        //     auto: false,
        //     parts: {
        //         hotkeys: true,
        //         appearance: true,
        //         vault: true,
        //     },
        // },
        configSync: {
            host: null,
            token: null,
            configID: null,
            auto: false,
            parts: {
                hotkeys: false,
                appearance: false,
                vault: false,
            },
        },
        hotkeys: {
            'settings-tab': {
                __nonStructural: true,
            },
        },
    }

    platformDefaults = {
        [Platform.macOS]: {
            hotkeys: {
                settings: ['⌘-,'],
            },
        },
        [Platform.Windows]: {
            hotkeys: {
                settings: ['Ctrl-,'],
            },
        },
        [Platform.Linux]: {
            hotkeys: {
                settings: ['Ctrl-,'],
            },
        },
    }
}
