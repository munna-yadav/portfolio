import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { GitMerge, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

interface PullRequest {
  id: number;
  title: string;
  body: string;
  html_url: string;
  repository_url: string;
  state: string;
  merged_at: string;
  created_at: string;
  repo: {
    name: string;
    full_name: string;
  };
  user: {
    login: string;
    avatar_url: string;
  };
  merged_by?: {
    login: string;
  };
}

export default function PullRequests() {
  const [pullRequests, setPullRequests] = useState<PullRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMergedPRs = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.github.com/search/issues?q=author:munna-yadav+is:pr+is:merged+repo:nimbusdotstorage/nimbus+sort:updated-desc&per_page=10`,
          {
            headers: {
              Accept: "application/vnd.github.v3+json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const data = await response.json();
        setPullRequests(data.items || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch pull requests");
        console.error("Error fetching PRs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMergedPRs();
  }, []);

  const getRepoName = (repoUrl: string) => {
    const parts = repoUrl.split("/");
    return parts[parts.length - 1];
  };

  if (loading) {
    return (
      <section>
        <div className="space-y-2">
          <div className="flex items-center gap-4">
            <GitMerge className="h-8 w-8" />
            <h2 className="text-3xl font-bold">Open Source Contributions</h2>
          </div>
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-muted-foreground">Loading pull requests...</p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section>
        <div className="space-y-2">
          <div className="flex items-center gap-4">
            <GitMerge className="h-8 w-8" />
            <h2 className="text-3xl font-bold">Open Source Contributions</h2>
          </div>
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-red-500">Error: {error}</p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="space-y-2">
        <div className="space-y-1">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center">
              <GitMerge className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold">Open Source Contributions</h2>
          </div>
          <p className="text-muted-foreground ml-14">Contributions to Nimbus - A decentralized storage protocol</p>
        </div>
        <div className="grid gap-6">
          {pullRequests.length === 0 ? (
            <Card>
              <CardContent className="pt-6">
                <p className="text-center text-muted-foreground">
                  No merged pull requests found in Nimbus repository.
                </p>
              </CardContent>
            </Card>
          ) : (
            pullRequests.map((pr) => (
              <Card key={pr.id} className="hover:shadow-lg transition-all group border-l-4 border-l-emerald-500/30 hover:border-l-emerald-500/60">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold line-clamp-2 group-hover:line-clamp-none">
                        {pr.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="outline" className="text-xs border-slate-300 text-slate-700 dark:border-slate-600 dark:text-slate-300">
                          {getRepoName(pr.repository_url)}
                        </Badge>
                        <Badge className="text-xs bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-700">
                          Merged
                        </Badge>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" asChild className="border-emerald-300 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-400 dark:border-emerald-700 dark:text-emerald-300 dark:hover:bg-emerald-900/20">
                      <a href={pr.html_url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View PR
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {pr.body && (
                      <p className="text-sm text-muted-foreground line-clamp-3 group-hover:line-clamp-none">
                        {pr.body.replace(/[#*_`]/g, "").substring(0, 200)}
                        {pr.body.length > 200 && "..."}
                      </p>
                    )}
                    
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
