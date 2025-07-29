package me.shashwathkamath

import kotlin.js.json

/**
 * A safe, typed wrapper for interacting with the Firebase Analytics
 * functions that we exposed on the `window` object in index.html.
 */
object Firebase {

    /**
     * Checks if the Firebase Analytics SDK was successfully loaded.
     */
    private val isAvailable: Boolean by lazy {
        js("typeof window.firebaseAnalytics !== 'undefined' && typeof window.firebaseLogEvent !== 'undefined'") as Boolean
    }

    /**
     * Logs a custom event to Firebase Analytics.
     *
     * @param eventName The name of the event to log.
     * @param params Optional key-value pairs to send with the event.
     */
    fun logEvent(eventName: String, params: dynamic = json()) {
        if (isAvailable) {
            try {
                val analytics = js("window.firebaseAnalytics")
                js("window.firebaseLogEvent(analytics, eventName, params)")
                console.log("Logged Firebase event: '$eventName'", params)
            } catch (e: Exception) {
                console.error("Failed to log Firebase event: '$eventName'", e)
            }
        } else {
            console.warn("Firebase Analytics not available. Skipping event: '$eventName'")
        }
    }
}