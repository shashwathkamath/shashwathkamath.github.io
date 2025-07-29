package me.shashwathkamath

import me.shashwathkamath.config.BuildConfig
import kotlin.js.json

@JsModule("firebase/app")
@JsNonModule
external fun initializeApp(config: dynamic): dynamic

@JsModule("firebase/analytics")
@JsNonModule
external object FirebaseAnalytics {
    fun getAnalytics(app: dynamic): dynamic
    fun logEvent(analytics: dynamic, eventName: String, params: dynamic)
}

object Firebase {
    private var analytics: dynamic = null
    private var initializationState: InitializationState = InitializationState.NOT_STARTED

    // A simple state machine to prevent re-initialization
    private enum class InitializationState {
        NOT_STARTED,
        IN_PROGRESS,
        COMPLETED,
        FAILED
    }

    private fun createAndValidateConfig(): dynamic {
        val configMap = mapOf(
            "apiKey" to BuildConfig.FIREBASE_API_KEY,
            "authDomain" to BuildConfig.FIREBASE_AUTH_DOMAIN,
            "projectId" to BuildConfig.FIREBASE_PROJECT_ID,
            "storageBucket" to BuildConfig.FIREBASE_STORAGE_BUCKET,
            "messagingSenderId" to BuildConfig.FIREBASE_MESSAGING_SENDER_ID,
            "appId" to BuildConfig.FIREBASE_APP_ID,
            "measurementId" to BuildConfig.FIREBASE_MEASUREMENT_ID
        )

        val missingKeys = configMap.filter { it.value.isBlank() }.keys
        if (missingKeys.isNotEmpty()) {
            console.error(
                "Firebase configuration is incomplete. Missing keys: ${missingKeys.joinToString()}. " +
                        "Please check your local.properties and build.gradle.kts."
            )
            return null
        }
        return json(*configMap.entries.map { it.key to it.value }.toTypedArray())
    }

    fun init() {
        // FIX: Replaced the 'lazy' delegate with a more direct, explicit initialization flow.
        // This makes the execution path simpler and less prone to hidden errors.
        if (initializationState != InitializationState.NOT_STARTED) {
            return // Only allow initialization to run once.
        }
        initializationState = InitializationState.IN_PROGRESS

        val config = createAndValidateConfig()
        if (config == null) {
            initializationState = InitializationState.FAILED
            // The validation function already logged the specific error.
            return
        }

        try {
            val app = initializeApp(config)
            analytics = FirebaseAnalytics.getAnalytics(app)
            initializationState = InitializationState.COMPLETED
            console.log("Firebase initialized successfully.")
        } catch (e: Exception) {
            initializationState = InitializationState.FAILED
            console.error("An error occurred during Firebase initialization:", e)
        }
    }

    fun logEvent(eventName: String, params: dynamic = json()) {
        if (initializationState != InitializationState.COMPLETED) {
            console.warn("Firebase not ready. Skipping event: '$eventName'")
            return
        }
        try {
            FirebaseAnalytics.logEvent(analytics, eventName, params)
            console.log("Logged Firebase event: '$eventName'", params)
        } catch (e: Exception) {
            console.error("Failed to log Firebase event: '$eventName'", e)
        }
    }
}