import type { ProjectVideo } from "./types";

/**
 * Do not embed private YouTube sharing invitation links.
 * Add a public watch URL, poster, and publicationApproved: true
 * before a video section is rendered.
 */
export const videos: ProjectVideo[] = [];

export const videoRecordTemplate: ProjectVideo = {
  id: "example-unpublished-video",
  publicYoutubeUrl: "",
  title: "",
  description: "",
  serviceCategory: "commercial-cleaning",
  publicationApproved: false,
  captionsOrTranscript: "needed",
};

export function publishedVideos(): ProjectVideo[] {
  return videos.filter(
    (video) => video.publicationApproved && Boolean(video.publicYoutubeUrl),
  );
}
