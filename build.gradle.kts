plugins {
    java
    id("org.springframework.boot") version "3.4.0"
    id("io.spring.dependency-management") version "1.1.6"
    id("com.github.johnrengelman.shadow") version "8.1.1"
}

val react = "src/main/react"
val static = "src/main/resources/static"
group = "dev.jsinco.spring"
version = "0.0.1-SNAPSHOT"

java {
    toolchain {
        languageVersion = JavaLanguageVersion.of(17)
    }
}

configurations {
    compileOnly {
        extendsFrom(configurations.annotationProcessor.get())
    }
}

repositories {
    mavenCentral()
}

dependencies {
    implementation("org.springframework.boot:spring-boot-starter-web")
    compileOnly("org.projectlombok:lombok")
    annotationProcessor("org.projectlombok:lombok")
    testImplementation("org.springframework.boot:spring-boot-starter-test")
    testRuntimeOnly("org.junit.platform:junit-platform-launcher")
}

tasks {

    jar {
        manifest {
            attributes(
                "Main-Class" to "dev.jsinco.spring.CgsFinalProjectApplication"
            )
        }
        enabled = false
    }

    bootJar {
        dependsOn("buildReact")
        dependsOn(shadowJar)
    }

    shadowJar {
        dependencies {

        }
        archiveClassifier.set("all")
    }

    register<Exec>("buildReact") {
        group = "buildreact"
        description = "Builds the React project"

        val reactDir = File(projectDir, react).toPath()
        workingDir = reactDir.toFile()

        println("Building React project in $reactDir")

        commandLine("npm.cmd", "install")
        commandLine("npm.cmd", "run", "build")


        doLast {
            println("Copied React build to $static")
            copyFolder(reactDir.resolve("dist").toFile(), File(static))
        }
    }

    withType<Test> {
        useJUnitPlatform()
    }
}

fun copyFolder(source: File, dest: File) {
    source.copyRecursively(dest, overwrite = true)
}

